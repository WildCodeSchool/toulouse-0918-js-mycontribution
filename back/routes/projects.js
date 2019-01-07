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

router.post('/:type', (req, res) => {
  const projectData = req.body;
  const { events } = req.body;
  delete projectData.events;
  db.query('INSERT INTO project SET ?', projectData, (err, project) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        error_details: err.sql
      })
    }
    if (project.length === 0) {
      res.status(404).json({
        err: `${req.params.type} empty`,
        error_details: err.sql
      })
    }
    // Permet de faire une boucle de requetes pour envoyer une requete par event. Renvoie res.status une fois toutes les 
    // requetes envoyées
    const eventQueries = events.map(event => ({...event, projectId: project.insertId })).map(event => db.queryAsync('INSERT INTO event SET ?', event))
    Promise.all(eventQueries)
    .then( () => res.status(200).json(project))
    
  })
})

module.exports = router;