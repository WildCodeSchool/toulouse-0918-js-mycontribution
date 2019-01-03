const data = require('./users.json');
const { results } = data;

const users = results.map(result => {
  const { name, gender, email, login, picture } = result;
  const { first, last, title } = name;
  const { username, password } = login;
  const { medium } = picture;
  // ici reformater pour avoir les mêmes champs que dans la DB
  return {last, first, username, email, password, gender, medium, title };
});

console.log(users);
// importer db.js
// faire une boucle: pour chaque user du tableau, db.query('INSERT INTO user SET ?' , user);
