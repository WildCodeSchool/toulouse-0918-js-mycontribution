
const express = require('express');
const router = express.Router();

const db = require('../conf');

router.get('/',(req, res) => {
  db.query('select * from user', (err, user) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(user)
  })
});

module.exports = router;