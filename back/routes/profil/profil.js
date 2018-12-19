const express = require('express');
const router = express.Router();
const db = require('../../conf');

//route Profil
router.get('/9/',(req,res) => {
  db.query('select * from user where id = 9',[req.params.id], (err, user) => {
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
        err: `userId ${req.params.userId} not found`
      })
    }
    res.status(200).json(project)
  })
});

module.exports = router;