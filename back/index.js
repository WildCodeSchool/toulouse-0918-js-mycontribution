const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');
const eventRouter = require('./routes/event');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth/auth')

const db = require('./conf');
const app = express();

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// une route pour les projets : initiatives et missions
app.use('/api/project',projectsRouter);
app.use('/api/event', eventRouter );
// route pour les users (contributeurs)
app.use('/api/users', usersRouter);

//route pour type de projects à partir de la page profil

app.use('/api/project', projectsRouter);
app.use('/api/event', eventRouter);
app.use('/api', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profil',projectsRouter);

app.get('/api/profil/:type', (req, res) => {
  let type = req.params.type;
  db.query(`select * from project where projectType=\'${type}\'`, (err, projects) => {
    if (err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(projects)
  })
});

//route de la page Profil juste pour vérification, à supprimer par la suite
app.get('/api/profil',(req,res) => {
  db.query('select * from user where id = 9', (err,user) => {
    if(err) {
      return res.status(500).send.apply(err.message);
    }
    res.json(user[0])
  })
});

app.get('/api/evenements', (req, res) => {
  db.query('select * from event', (err, events) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(events)
  })
});

app.listen(process.env.PORT || 8000);
