const express = require('express');
const router = express.Router();

const db = require('../conf');

router.get('/:type',(req,res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

//ajout de la route profil/:type pour récupérer les listes dans Profil.js
router.get('/profil/:type',(req,res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err,projects) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(projects)
  })
});
module.exports = router;