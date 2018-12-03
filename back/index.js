const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');

const app = express();

// middleware utilisation du req.body en json pour toutes les routes
app.use(bodyParser.json());

// une route pour les projets : initiatives et missions
app.use('/api/project',projectsRouter);

app.listen(process.env.PORT || 8000);