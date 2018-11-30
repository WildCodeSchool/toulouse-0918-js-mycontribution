const express = require('express');
const db = require('./conf');

const app = express();

app.get('/api/initiatives',(req,res) => {
  db.query('select * from project', (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});
app.get('/profil',(req,res) => {
  db.query('select * from project', (err,project) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(project)
  })
});

app.listen(8000);