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

// Concaténer eventDate et eventHour en un seul champ date
const formatEvent = (event, projectId) => {
  const { eventDate, eventHour } = event;
  delete event.eventDate;
  delete event.eventHour;
  const date = `${eventDate} ${eventHour}`;
  return {...event, projectId, date };
}

router.post('/:type', checkAuthorizationHeader, upload.single('picture'), (req, res) => {
  const defaultLogos = {
    mission: 'rocket.png',
    initiative: 'lightbulb.png'
  };
  const projectData = req.body;
  const defaultLogo = defaultLogos[projectData.projectType];
  const { events } = req.body;
  delete projectData.events;
  let project;

  const promise = req.file
    ? renameAsync(req.file.path, 'public/logos-project/' + req.file.originalname)
      .then(() => ({ ...projectData, logo: `/logos-project/${req.file.originalname}` }))
    : Promise.resolve({ ...projectData, logo: `/default-images/${defaultLogo}` });

  return promise
    .then(projectWithImg => db.queryAsync('INSERT INTO project SET ?', projectWithImg))
    .then(({ insertId }) => db.queryAsync('SELECT * FROM project WHERE id = ?', insertId))
    .then(projects => {
      project = projects[0];
    })
    .then(() => {
      const eventQueries = events
        // suppr events avec champs vides => bugs! remplacé par validation côté front
        .filter(event => event.eventDate && event.eventHour && event.eventName && event.eventDesc && event.eventPlace)
        .map(event => formatEvent(event, project.id))
        .map(event => db.queryAsync('INSERT INTO event SET ?', event));

      return Promise.all(eventQueries)
        .then( () => res.status(200).json(project));
    })
    .catch(err => res.status(500).json({
      error: err.message
    }));
  
});

// Middleware pour s'assurer que:
// 1. le projet existe,
// 2. l'utilisateur qui veut le modifier en est bien le propriétaire.
// Pour cela on doit aller lire le projet dans la DB
// Ce middleware DOIT être exécuté après celui qui vérifie l'authentification
const checkProjectOwner = (req, res, next) => {
  db.queryAsync('SELECT * FROM project WHERE id = ?', req.params.id)
    .then(projects => {
      if (!projects.length) {
        return res.sendStatus(404);
      }
      if (projects[0].userId !== req.user.id) {
        return res.sendStatus(403);
      }
      next();
    });
};

// Plus complexe que l'insertion pure et simple d'un nombre de projets
// On doit déterminer:
// 1. lesquels existent déjà dans la db et doivent être mis à jour
// 2. lesquels doivent être créés
// 3. éventuellement (plus tard !) lesquels doivent être effacés
const updateProjectEvents = (projectId, eventsInBody) => {
  const nonEmptyEvents = eventsInBody.filter(event => event.eventDate && event.eventHour && event.eventName && event.eventDesc && event.eventPlace);
  // On pourrait se passer de les lire, cela ne sert que si on veut en effacer
  return db.queryAsync('SELECT * FROM event WHERE projectId = ?', projectId)
    .then(eventsInDb => {
      // Ceux qui ont un id doivent être mis à jour
      const eventsToUpdate = nonEmptyEvents.filter(e => e.id);
      const updatePromises = eventsToUpdate
        .map(event => formatEvent(event, projectId))
        .map(
          event => db.queryAsync('UPDATE event SET ? WHERE id = ?', [event, event.id])
        );

      // Ceux qui n'ent ont pas sont à créer
      const eventsToCreate = nonEmptyEvents.filter(e => !e.id);
      const insertPromises = eventsToCreate
        .map(event => formatEvent(event, projectId))
        .map(
          event => db.queryAsync('INSERT INTO event SET ?', event)
        );
      // On "concatène" les tableaux de promises d'update et de create
      const promises = [...updatePromises, ...insertPromises];
      return Promise.all(promises);
    });
};

router.put('/:type/:id', checkAuthorizationHeader, checkProjectOwner, upload.single('picture'), (req, res) => {
  const projectData = req.body;
  const { events } = req.body;
  delete projectData.events;
  const projectId = req.params.id;

  const promise = req.file
    ? renameAsync(req.file.path, 'public/logos-project/' + req.file.originalname)
      .then(() => ({ ...projectData, logo: `/logos-project/${req.file.originalname}` }))
    : Promise.resolve({ ...projectData });

  return promise
    .then(project => db.queryAsync('UPDATE project SET ? WHERE id = ?', [project, projectId]))
    .then(() => db.queryAsync('SELECT * FROM project WHERE id = ?', projectId))
    .then(projects => {
      project = projects[0];
      // Update events seulement pour initiative
      return project.projectType === 'initiative' && events
        ? updateProjectEvents(projectId, events).then(() => project)
        : Promise.resolve(project);
    })
    // On pourrait vouloir envoyer les évènements mis à jour en les lisant
    // puis en les ajoutant au project sur la clé events, mais comme on va rediriger
    // vers une autre page sur le front, on peut s'en passer
    .then(project => res.status(200).json(project))
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        error: err.message,
        details: err.sql
      })
    });
  
});

module.exports = router;