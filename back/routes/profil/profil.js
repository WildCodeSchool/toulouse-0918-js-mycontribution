const express = require('express');
const router = express.Router();
const db = require('../../conf');

//route Profil
router.get('/:id',(req,res) => {
  db.query('select * from user where id = ?',[req.params.id], (err, user) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(user.length === 0) {
      res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    res.status(200).json(user[0])
  })
});
// route Profil => pour accéder à mes favoris
router.get('/:id/favorite',(req,res) => {
  let favoriteId = req.params.id;
  db.query(`SELECT * FROM project INNER JOIN favorite ON project.userId = favorite.userId`,[req.params.id], (err, favorite) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(favorite.length === 0) {
      res.status(404).json({
        err: `user ${req.params.id} not found`
      })
    }
    res.status(200).json(favorite)
  })
}); 

// route Profil => pour accéder à mes missions, mes initiatives
router.get('/:id/:type',(req,res) => {
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
      res.status(404).json({
        err: `userId ${req.params.id} not found`
      })
    }
    res.status(200).json(project)
  })
});

module.exports = router;