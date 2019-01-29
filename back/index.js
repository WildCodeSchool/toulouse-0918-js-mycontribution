const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const version = require('./version');
const projectsRouter = require('./routes/projects');
const eventRouter = require('./routes/event');
const authRouter = require('./routes/auth/auth')
const usersRouter = require('./routes/users');
const profilRouter = require('./routes/profil/profil');
const updateProfilRouter = require('./routes/profil/updateprofil');

const app = express();
const buildDir = path.resolve(__dirname, '../front/build');

const defaultRouteHandler = (req, res) => version.readIndex()
  .then(html => res.send(html))
  .catch(err => res.status(404)
    .send('index.html not found. run `npm run build` from `front` folder')
  );

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', defaultRouteHandler);
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

app.get('*', defaultRouteHandler);

app.listen(process.env.PORT || 8000);
