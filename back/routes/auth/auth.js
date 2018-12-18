const express = require('express');
const router = express.Router();
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');

router.post('/signup', upload.single('picture'), function (req, res) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function (error) {
    if (error) {
      res.status(500).send('Problème durant le déplacement')
    } else {
      const post = [req.body.lastname, req.body.firstname, req.body.connext, req.body.email, req.body.password, req.body.presentation, 'public/images/' + req.file.originalname, req.body.skill]
      db.query('INSERT INTO user (lastname, firstname, connext, email, password, presentation, picture, skill) VALUES (?,?,?,?,?,?,?,?)', post, function (error, results, fields) {
        if (error) {
          return res.status(500).send('Une erreur est survenue')
        }
        return res.status(200).json('Votre compte a bien été enregistré')
      })
    }
  })
})

module.exports = router;