const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');
const expressJwt = require('express-jwt');
const { secretKey } = require('../../settings');

// Itérations pour génération de la clé de salage
const saltRounds = 10;


const isAuthenticated = expressJwt({
  secret: secretKey
});

// Middleware qui check que l'id de l'user reconnu via le token
// est bien le même que l'id de l'user à modifier !!
// Doit OBLIGATOIREMENT être placé après checkAuthorizationHeader
// pour avoir la clé req.user
const isProfileOwner = (req, res, next) => {
  if (req.user.id !== Number(req.params.id)) {
    return res.sendStatus(403);
  }
  return next();
};

//route pour updater les informations du profil
router.put('/:id', isAuthenticated, isProfileOwner, (req, res) => {
  db.query('update user set ? where id = ?', [req.body, req.params.id], (err, user) => {
    if (err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if (user.length === 0) {
      res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    db.query('select * from user where id = ?', [req.params.id], (err, user) => {
      if (err) {
        console.log(error)
        return res.status(500).json({
          err: err.message,
          error_details: err.sql
        })
      }
      if (user.length === 0) {
        res.status(404).json({
          err: `id ${req.params.id} not found`
        })
      }
      res.status(200).json(user[0])
    })
  })
});

// "helper" pour vérifier si un le tableau d'users récupéré de la BDD
// est non-vide. "throw" une erreur pour court-circuiter tous les .then
// et arriver directement au catch, si aucun user correspondant à l'id
// si on a un user dans le tableau on le renvoie, le .then suivant le
// récupère
const extractUserPassword = users => {
  if (users.length === 0) {
    throw new Error('404');
  }
  return users[0].password;
}

// check req.body.old par rapport au mot de passe actuel en DB
const checkOldPassword = (clearPassInBody, hashInDb) => bcrypt.compare(
  clearPassInBody, hashInDb
)
  .then(passwordsMatch => {
    if (!passwordsMatch) {
      throw new Error('401');
    }
  });

// route pour updater son password
router.put('/:id/password', isAuthenticated, isProfileOwner, (req, res) => {
  const { id } = req.params;
  db.queryAsync('SELECT password FROM user WHERE id=?', id)
    .then(extractUserPassword)
    .then(oldPassInDb => checkOldPassword(req.body.old, oldPassInDb))
    .then(() => bcrypt.hash(req.body.password, saltRounds))
    .then(hash => db.queryAsync('UPDATE user SET password = ? WHERE id = ?', [hash, id]))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err.message));
});

// route pour updater son avatar de profil
router.put('/:id/picture', isAuthenticated, isProfileOwner, upload.single('picture'), function (req, res) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, (error) => {
    if (error) {
      res.status(500).json('Problème durant le déplacement')
    } else {
      db.query('UPDATE user SET picture = ? WHERE id = ?', ['/images/' + req.file.originalname, req.params.id], (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).json('Une erreur est survenue')
        }
        db.query('select * from user where id = ?', [req.params.id], (err, user) => {
          if (err) {
            console.log(error)
            return res.status(500).json({
              err: err.message,
              error_details: err.sql
            })
          }
          if (user.length === 0) {
            res.status(404).json({
              err: `id ${req.params.id} not found`
            })
          }
          res.status(200).json(user[0])
        })
      })
    }
  })
})
module.exports = router;
