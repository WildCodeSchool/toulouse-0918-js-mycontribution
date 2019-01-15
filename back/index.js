const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const projectsRouter = require('./routes/projects');
const eventRouter = require('./routes/event');
const authRouter = require('./routes/auth/auth')
const usersRouter = require('./routes/users');
const profilRouter = require('./routes/profil/profil');
const updateProfilRouter = require('./routes/profil/updateprofil');

const db = require('./conf.js');
const app = express();
const buildDir = path.resolve(__dirname, '../front/build');

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(buildDir));

// une route pour les projets : initiatives et missions
app.use('/api/project',projectsRouter);
app.use('/api/event', eventRouter );
// route pour les users (contributeurs)
app.use('/api/users', usersRouter);
// route pour page profil => profil, => mes missions 
app.use('/api/profil', profilRouter);
// route pour update de la page profil 
app.use('/api/profil/update', updateProfilRouter);
// route pour la connexion
app.use('/api/auth', authRouter);

// app.get('/api/evenements', (req, res) => {
//   db.query('select * from event', (err, events) => {
//     if (err) {
//       return res.status(500).send(err.message);
//     }
//     res.json(events)
//   })
// });

app.get('*', (req, res) => res.sendFile(buildDir + '/index.html'));

app.listen(process.env.PORT || 8000);
