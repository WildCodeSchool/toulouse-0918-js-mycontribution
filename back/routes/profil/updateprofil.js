const express = require('express');
const router = express.Router();
const db = require('../../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');

/* const checkAuthorizationHeader = expressJwt({
  secret: secretKey
}) */

//route pour updater les informations du profil
router.put('/:id', (req, res) => {
  db.query('update user set ? where id = ?', [req.body, req.params.id], (err, user) => {
    if (err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if (user.length === 0) {
      res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    db.query('select * from user where id = ?', [req.params.id], (err, user) => {
      if (err) {
        console.log(error)
        return res.status(500).json({
          err: err.message,
          error_details: err.sql
        })
      }
      if (user.length === 0) {
        res.status(404).json({
          err: `id ${req.params.id} not found`
        })
      }
      res.status(200).json(user[0])
    })
  })
});

// route pour updater son avatar de profil
router.put('/:id/picture', upload.single('picture'), function (req, res) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, (error) => {
    if (error) {
      res.status(500).json('Problème durant le déplacement')
    } else {
      db.query('UPDATE user SET picture = ? WHERE id = ?', ['/images/' + req.file.originalname, req.params.id], (error, results, fields) => {
        if (error) {
          console.log(error)
          return res.status(500).json('Une erreur est survenue')
        }
        db.query('select * from user where id = ?', [req.params.id], (err, user) => {
          if (err) {
            console.log(error)
            return res.status(500).json({
              err: err.message,
              error_details: err.sql
            })
          }
          if (user.length === 0) {
            res.status(404).json({
              err: `id ${req.params.id} not found`
            })
          }
          res.status(200).json(user[0])
        })
      })
    }
  })
})
module.exports = router;
