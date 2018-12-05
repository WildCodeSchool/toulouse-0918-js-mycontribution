const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');

const app = express();

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());

<<<<<<< HEAD
// une route pour les projets : initiatives et missions
app.use('/api/project',projectsRouter);
=======
const db = require('./conf');
const app = express();

app.get('/api/project/:type',(req,res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err,projects) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(projects)
  })
});

app.get('/api/profil/:type',(req,res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err,projects) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(projects)
  })
});

app.get('/api/profil',(req,res) => {
  db.query('select * from user where id = 6', (err,user) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(user[0])
  })
});
>>>>>>> dev

app.listen(process.env.PORT || 8000);
=======
app.get('/api/evenements',(req,res) => {
  db.query('select * from event', (err,events) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(events)
  })
});

app.listen(8000);
>>>>>>> dev
