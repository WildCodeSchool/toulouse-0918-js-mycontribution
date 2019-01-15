const express = require('express');
const router = express.Router();
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../../settings');

router.post('/signup', upload.single('picture'), function (req, res) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function (error) {
    if (error) {
      res.status(500).json('Problème durant le déplacement')
    } else {
      let hash = bcrypt.hashSync(req.body.password, 10);
      const post = [req.body.lastname, req.body.firstname, req.body.connext, req.body.email, hash, req.body.presentation, '/images/' + req.file.originalname, req.body.skill]
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

router.post('/mdp', function (req, res) {
  db.query('SELECT * FROM user WHERE email=?', [String(req.body.email)], function (error, results, fields) {
    if (error) {
      return res.status(500).send(error)
    }
    if (results.length === 0) {
      return res.status(401).json('Cet email n\'existe pas')
    }
    let hash = bcrypt.hashSync(req.body.password, 10);
    db.query('UPDATE user SET password=? WHERE email=?', [hash, String(req.body.email)], function (error, results, fields) {
      if (error) {
        return res.status(500).send(error)
      }
      return res.status(200).send('OK')
    })
  })
})

module.exports = router;