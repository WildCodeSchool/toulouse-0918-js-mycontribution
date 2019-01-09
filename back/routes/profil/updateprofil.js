const express = require('express');
const router = express.Router();
const db = require('../../conf');

//route pour updater les informations du profil
router.put('/:id',(req,res) => {
  db.query('update user set ? where id = ?',[req.body, req.params.id], (err, user) => {
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


module.exports = router;