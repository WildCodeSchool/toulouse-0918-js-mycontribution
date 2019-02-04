const express = require('express');
const router = express.Router();
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { promisify } = require('util');
const { secretKey } = require('../../settings.env');

const renameAsync = promisify(fs.rename);

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
});

// Renomme le fichier d'avatar s'il est trouvé
const renameIfAvatarFound = req => req.file
  ? renameAsync(req.file.path, 'public/images/' + req.file.originalname)
  : Promise.resolve();

router.post('/signup', upload.single('picture'), function (req, res) {
  return renameIfAvatarFound(req)
  .then(() => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    // Attribution d'un avatar par défaut si photo non fournie
    const avatar = req.file
      ? '/images/' + req.file.originalname
      : '/default-images/avatar.png';
    const post = [req.body.lastname, req.body.firstname, req.body.connext, req.body.email, hash, req.body.presentation, avatar, req.body.skill]
    return db.queryAsync(
      'INSERT INTO user (lastname, firstname, connext, email, password, presentation, picture, skill) VALUES (?,?,?,?,?,?,?,?)', post
    );
  })
  .then(() => res.status(200).json('Votre compte a bien été enregistré'))
  .catch(error => {
    console.log(error);
    if (error.sqlMessage && error.sqlMessage.includes('Duplicate entry')) {
      return res.status(409).send(`Un compte existe déjà avec l'adresse e-mail '${req.body.email}'`);
    }
    return res.status(500).send('Une erreur est survenue');
  });
});

router.post('/signin', function (req, res) {
  db.query('SELECT * FROM user WHERE email=?', [String(req.body.email)], function (error, results, fields) {
    if (error) {
      return res.status(500).send(error)
    }
    if (results.length === 0) {
      return res.status(401).json('Email ou mot de passe incorrect')
    }
    const user = {
      id: results[0].id,
      picture: results[0].picture,
      firstname: results[0].firstname
    }
    let isSame = bcrypt.compareSync(req.body.password, results[0].password)
    isSame ?
      jwt.sign(user, secretKey, (err, token) => {
        if (err) {
          return res.status(401).json({
            error: 'JWT generation failed'
          })
        }
        return res.json({
          token
        })
      })
      :
      res.status(401).send('Email ou mot de passe incorrect')
  })
})

// Renouvellement du JSON Web Token, sert notamment à propager
// les informations de profil mises à jour
router.get('/renew-jwt', checkAuthorizationHeader, (req, res) => {
  // Dans le .then on ne prend pas la peine de checker si l'utilisateur existe,
  // car s'il est arrivé jusqu'ici, il existe forcément !
  return db.queryAsync('SELECT id, picture, firstname FROM user WHERE id = ?', req.user.id)
    // On est obligé de créer un nouvel objet sans les infos ajoutées par MySQL
    // qui font planter jwt.sign
    .then(users => ({...users[0]}))
    .then(user => jwt.sign(user, secretKey))
    .then(token => res.json(token))
    .catch(err => {
      console.error(err);
      res.status(401).send('Echec du renouvellement du JWT')
    });
});

// Temporairement ajouté par Maitetxu (je crois) pour permettre
// un reset de password, mais abandonné car insecure
// router.post('/mdp', function (req, res) {
//   db.query('SELECT * FROM user WHERE email=?', [String(req.body.email)], function (error, results, fields) {
//     if (error) {
//       return res.status(500).send(error)
//     }
//     if (results.length === 0) {
//       return res.status(401).json('Cet email n\'existe pas')
//     }
//     let hash = bcrypt.hashSync(req.body.password, 10);
//     db.query('UPDATE user SET password=? WHERE email=?', [hash, String(req.body.email)], function (error, results, fields) {
//       if (error) {
//         return res.status(500).send(error)
//       }
//       return res.status(200).send('OK')
//     })
//   })
// })

module.exports = router;