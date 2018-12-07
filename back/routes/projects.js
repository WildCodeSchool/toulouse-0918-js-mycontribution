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

router.get('/:type',(req,res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

module.exports = router;