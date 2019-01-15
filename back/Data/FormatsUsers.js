const data = require('./dataUsers.json');
const { results } = data;



// LOAD DATA INFILE '/var/lib/mysql-files/users.csv' 
// INTO TABLE users 
// FIELDS TERMINATED BY ',' 
// ENCLOSED BY '"'
// LINES TERMINATED BY '\n'
// IGNORE 1 LINES;
// (lastname, firstname, connext, email, password, presentation, picture, skill )
// SET ID = NULL; 

// algo pour recuperer les clés d'un fichier json de randomUser
const users = results.map(result => {
  const { name, gender, email, login, picture } = result;
  const { first, last, title } = name;
  const { username, password } = login;

  const { large } = picture;
  // ici reformater pour avoir les mêmes champs que dans la DB
  return {last, first, username, email, password, gender, large, title };
});

const usersJSON = JSON.stringify(users)

console.log(usersJSON)
// importer db.js
// faire une boucle: pour chaque user du tableau, db.query('INSERT INTO user SET ?' , user);

// sauver en JSON un tableau
// 1. const usersJSON = JSON.stringify(users)
// 2. fs.writeFileSync('filename.json', usersJSON)