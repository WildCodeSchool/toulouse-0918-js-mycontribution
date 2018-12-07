const express = require('express');
const router = express.Router();

const db = require('../conf');

router.get('/',(req, res) => {
  db.query('select * from event', (err, event) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(event)
  })
});

module.exports = router;