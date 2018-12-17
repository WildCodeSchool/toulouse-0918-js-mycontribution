
const express = require('express');
const router = express.Router();

const db = require('../conf');

router.get('/users',(req, res) => {
  db.query('select * from user', (err, users) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(users)
  })
});

module.exports = router;