const express = require('express');
const db = require('./conf');

const app = express();

app.get('/api/project/:type',(req,res) => {
  let type = req.params.type;
  let requete = 'select * from project where projectType=\'' + type + '\'';
  db.query(`select * from project where projectType=\'${type}\'`, (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

app.get('/api/evenements',(req,res) => {
  db.query('select * from event', (err,events) => {
    if(err) {
      return res.status(500).send(err.message);
    }
    res.json(events)
  })
});

app.listen(8000);