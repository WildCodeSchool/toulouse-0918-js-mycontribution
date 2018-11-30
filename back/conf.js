const  mysql = require('mysql');

const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'my_contribution', // le nom d'utilisateur
password :  'mycontribution', // le mot de passe
database :  'mycontribution_data', // le nom de la base de données
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    process.exit(1);
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;