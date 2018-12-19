const express = require('express');
const router = express.Router();
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');
const bcrypt = require('bcrypt');

router.post('/signup', upload.single('picture'), function (req, res) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function (error) {
    if (error) {
      res.status(500).json('Problème durant le déplacement')
    } else {
      let hash = bcrypt.hashSync(req.body.password, 10);
      const post = [req.body.lastname, req.body.firstname, req.body.connext, req.body.email, hash, req.body.presentation, 'public/images/' + req.file.originalname, req.body.skill]
      db.query('INSERT INTO user (lastname, firstname, connext, email, password, presentation, picture, skill) VALUES (?,?,?,?,?,?,?,?)', post, function (error, results, fields) {
        if (error) {
          return res.status(500).json('Une erreur est survenue')
        }
        return res.status(200).json('Votre compte a bien été enregistré')
      })
    }
  })
})

router.post('/signin', function (req, res) {
  db.query('SELECT * FROM user WHERE email=?', [String(req.body.email)], function (error, results, fields) {
    if (error) {
      return res.status(500).send(error)
    }
    if (results.length === 0) {
      return res.status(200).json('Cet email n\'existe pas')
    }
    let isSame = bcrypt.compareSync(req.body.password, results[0].password)
    isSame ?
      db.query('SELECT * FROM user WHERE email=?', [String(req.body.email)], function (error, results, fields) {
        if (error) {
          return res.sendStatus(500)
        }
        return res.status(200).json(results)
      })
      :
      res.status(500).json('Mot de passe incorrect')
  })
})

module.exports = router;