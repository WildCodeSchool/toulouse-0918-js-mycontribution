const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');

const app = express();

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());

<<<<<<< HEAD
// une route pour les projets : initiatives et missions
app.use('/api/project',projectsRouter);

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
