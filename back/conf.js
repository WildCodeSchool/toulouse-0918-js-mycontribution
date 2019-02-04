const mysql = require('mysql');
const util = require('util');

const settings = require('./settings.env');

const connection = mysql.createConnection(settings.db);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.message);
    process.exit(1);
  }

});

connection.queryAsync = util.promisify(connection.query.bind(connection));

// Hack pour maintenir la connexion MySQL active (sinon elle se ferme après un certain temps)
setInterval(() => connection.query('SELECT 1'), 600000);

module.exports = connection;