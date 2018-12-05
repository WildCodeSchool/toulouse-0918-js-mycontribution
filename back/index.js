const express = require('express');
const db = require('./conf');
const app = express();
//ajout du router
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());
//route du router "Projects"
app.use('/api/project',projectsRouter);

//route de la page Profil juste pour vérification, à supprimer par la suite
app.get('/api/profil',(req,res) => {
  db.query('select * from user where id = 6', (err,user) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(user[0])
  })
});

app.get('/api/evenements',(req,res) => {
  db.query('select * from event', (err,events) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(events)
  })
});

app.listen(8000);