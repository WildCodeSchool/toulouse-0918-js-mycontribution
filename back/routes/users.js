
const express = require('express');
const router = express.Router();
const db = require('../conf');
const expressJwt = require('express-jwt');
const { secretKey } = require('../settings');

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

router.get('/',(req, res) => {
  db.query('select * from user', (err, users) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(users)
  })
});
// route pour récupérer les favoris du user
router.get('/:id/favorites', checkAuthorizationHeader, (req, res) => {
  db.query('select projectId from favorite where userId = ?', [req.params.id], (err, results) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    const favoriteIds = results.map(item => item.projectId)
    res.json(favoriteIds)
  })
})

module.exports = router;