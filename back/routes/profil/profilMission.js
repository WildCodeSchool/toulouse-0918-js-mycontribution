const express = require('express');
const router = express.Router();
const db = require('../../conf');

router.get('/profil/:type',(req,res) => {
  let type = req.params.type;
  // let requete = 'select * from project where projectType=\'' + type + '\'';
  db.query(`SELECT * FROM project WHERE projectType=\'${type}\' AND userId === 8`, (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

module.exports = router;