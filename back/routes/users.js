
const express = require('express');
const router = express.Router();
const db = require('../conf');
const expressJwt = require('express-jwt');
const { secretKey } = require('../settings');

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

// route pour lire les users
router.get('/', (req, res) => {
  db.query('select * from user', (err, users) => {
    if (err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(users)
  })
});

// route pour récupérer les informations du user
router.get('/:id', checkAuthorizationHeader, (req, res) => {
  db.query('select * from user where id = ?', [req.params.id], (err, user) => {

    if (err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if (user.length === 0) {
      return res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    res.status(200).json(user[0])
  })
});


module.exports = router;