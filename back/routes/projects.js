const express = require('express');
const router = express.Router();
const db = require('../conf');
const multer = require('multer');
const util = require('util');
const upload = multer({ dest: './tmp' });
const fs = require('fs');
const expressJwt = require('express-jwt');
const { secretKey } = require('../settings');

const renameAsync = util.promisify(fs.rename.bind(fs));

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

router.get('/:type', (req, res) => {
  let type = req.params.type;
  // let requete = 'select * from project where projectType=\'' + type + '\'';
  db.query(`select * from project where projectType=\'${type}\' ORDER BY startDate ASC`, (err, project) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(project)
  })
});

router.get('/:type/:id', checkAuthorizationHeader, (req, res) => {
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

const formatEvent = (event, projectId) => {
  const { eventDate, eventHour } = event;
  delete event.eventDate;
  delete event.eventHour;
  const date = `${eventDate} ${eventHour}`;
  return {...event, projectId, date };
}

router.post('/:type', checkAuthorizationHeader, upload.single('logo'), (req, res) => {
  const projectData = req.body;
  const { events } = req.body;
  delete projectData.events;
  let project;

  const promise = req.file
    ? renameAsync(req.file.path, 'public/logos-project/' + req.file.originalname)
      .then(() => {
        projectData.logo = '/logos-project/' + req.file.originalname;
      })
    : Promise.resolve();

  return promise
    .then(() => db.queryAsync('INSERT INTO project SET ?', projectData))
    .then(({ insertId }) => db.queryAsync('SELECT * FROM project WHERE id = ?', insertId))
    .then(projects => {
      project = projects[0];
    })
    .then(() => {
      const eventQueries = events
        .filter(event => event.eventDate && event.eventName && event.eventDesc)
        .map(event => formatEvent(event, project.id))
        .map(event => db.queryAsync('INSERT INTO event SET ?', event));

      return Promise.all(eventQueries)
        .then( () => res.status(200).json(project));
    })
    .catch(err => res.status(500).json({
      error: err.message
    }));
  
});

module.exports = router;