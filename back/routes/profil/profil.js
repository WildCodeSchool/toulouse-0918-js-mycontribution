const express = require('express');
const router = express.Router();
const db = require('../../conf');
const expressJwt = require('express-jwt');
const { secretKey } = require('../../settings');

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

//route Profil
router.get('/:id', checkAuthorizationHeader, (req,res) => {
  db.query('select * from user where id = ?',[req.params.id], (err, user) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(user.length === 0) {
      return res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    res.status(200).json(user[0])
  })
});

// route Profil => pour accéder à mes favoris
router.get('/:id/favorite', checkAuthorizationHeader, (req,res) => {
  let userId = req.params.id;
  db.query(`SELECT * FROM project JOIN favorite USING (projectId) WHERE favorite.userId=\'${userId}\'`,[req.params.id], (err, favorite) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(favorite.length === 0) {
      return res.status(404).json({
        err: `user ${req.params.id} not found`
      })
    }
    res.status(200).json(favorite)
  })
}); 

// route Profil => pour accéder à mes missions, mes initiatives
router.get('/:id/:type', checkAuthorizationHeader, (req,res) => {
  let type = req.params.type;
  let id = req.params.id;
  db.query(`SELECT * FROM project WHERE projectType=\'${type}\' AND userId=\'${id}\'`,[req.params.id], (err,project) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(project.length === 0) {
      return res.status(404).json({
        err: `userId ${req.params.id} not found`
      })
    }
    res.status(200).json(project)
  })
});

module.exports = router;