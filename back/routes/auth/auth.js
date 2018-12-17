const express = require('express');
const router = express.Router();
const db = require('../../conf');

router.post('/signup', function (req, res) {
  console.log(req.body)
  const post = [req.body.lastname, req.body.firstname, req.body.connext, req.body.email, req.body.password, req.body.presentation, req.body.picture, req.body.skill]
  db.query('INSERT INTO user (lastname, firstname, connext, email, password, presentation, picture, skill) VALUES (?,?,?,?,?,?,?,?)', post, function (error, results, fields) {
    if (error) {
      console.log(error.sql)
      res.status(500).send('Une erreur est survenue')
    }
    res.status(200).send('Votre compte a bien été enregistré')
  })
})

module.exports = router;