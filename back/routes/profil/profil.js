const express = require('express');
const router = express.Router();
const db = require('../../conf');

//route de la page Profil juste pour vérification, à supprimer par la suite
router.get('/profil',(req,res) => {
  db.query('SELECT * FROM user WHERE id = 9', (err,user) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(user[0])
  })
});

module.exports = router;