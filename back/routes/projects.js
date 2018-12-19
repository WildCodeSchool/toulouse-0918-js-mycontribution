const express = require('express');
const router = express.Router();
const db = require('../conf');
const multer = require('multer');
const upload = multer({ dest: './tmp' });
const fs = require('fs');



router.get('/:type', (req, res) => {
  let type = req.params.type;
  // let requete = 'select * from project where projectType=\'' + type + '\'';
  db.query(`select * from project where projectType=\'${type}\'`, (err, project) => {
    if (err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

router.get('/:type/:id', (req, res) => {
  console.log(req.params)
  db.query('SELECT * FROM project WHERE id = ?', [req.params.id], (err, project) => {
    if (err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if (project.length === 0) {
      res.status(404).json({
        err: `${req.params.type} with id ${req.params.id} not found`
      })
    }
    res.status(200).json(project[0])
  })
})

router.post('/:type', upload.single('logo'), (req, res) => {
  const projectData = req.body;
  fs.rename(req.file.path, 'public/images' + req.file.originalname, function (error) {
    if (error) {
      res.status(500).send('Problème durant le déplacement')
    }
    else {
      db.query('INSERT INTO project SET ?', projectData, (err, project) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
            error_details: err.sql
          })
        }
        if (project.length === 0) {
          res.status(404).json({
            err: `${req.params.type} not found`
          })
        }
        res.status(200).json(project)
      })
    }
  })

})

module.exports = router;