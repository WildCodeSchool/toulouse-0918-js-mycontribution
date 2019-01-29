
const express = require('express');
const router = express.Router();
const db = require('../conf');
const expressJwt = require('express-jwt');
const { secretKey } = require('../settings');
const mysql = require('mysql');
const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

/**
 * @param {string} table La table à interroger
 * @param {array} queriedFields Les champs à récupérer
 * @param {array} filterFields Les champs sur lesquels filtrer
 * @param {string} search Le terme de recherche
 * @param {number} page La page à chercher (à partir de zéro)
 */
const queryByKeyword = (table, queriedFields, filterFields, search = '', page = 0, perPage = 30) => {
  let where = 1;
  if (search) {
    // Il faut escaper les champs
    const likeSearch = mysql.escape(`%${search}%`);
    // On recherche sur chaque champ avec le même critère
    where = filterFields
      .map(f => `${f} LIKE ${likeSearch}`)
      .join(' OR ');
  }
  const limit = `${page * perPage}, ${perPage}`;
  const querySelect = `SELECT ${queriedFields} FROM ${table} WHERE ${where} LIMIT ${limit}`;
  const queryCount = `SELECT COUNT(*) AS count FROM ${table} WHERE ${where}`;
  const params = new Array(filterFields.length).fill(search);
  return Promise.all([
    db.queryAsync(queryCount, params),
    db.queryAsync(querySelect, params)
  ])
    .then(([count, records]) => ({ count: count[0].count, records }));
}

const formatResponsePayload = (res, count, records, perPage = 30) => {
  res.set('X-Total-Pages', Math.ceil(count / perPage));
  res.json(records);
}

router.get('/', (req, res) => {
  return queryByKeyword(
    'user',
    ['id', 'firstname', 'lastname', 'email', 'connext', 'skill', 'presentation', 'picture'],
    ['firstname', 'lastname', 'skill', 'presentation'],
    req.query.search,
    req.query.page
  )
    .then(({ count, records }) => formatResponsePayload(res, count, records))
    .catch(err => res.status(500).json({ error: err.message, details: err.sql }));
});

// route pour lire les users
// router.get('/', (req, res) => {
//   db.query('select id, firstname, lastname, email, connext, picture, skill, presentation from user WHERE ?', req.query, (err, users) => {
//     if (err) {
//       return res.status(500).json({ error: err.message, details: err.sql });
//     }
//     res.json(users)
//   })
// });

// route pour récupérer les informations du user
router.get('/:id', checkAuthorizationHeader, (req, res) => {
  db.query('select id, firstname, lastname, email, connext, picture, skill, presentation from user where id = ?', [req.params.id], (err, user) => {

    if (err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if (user.length === 0) {
      return res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    res.status(200).json(user[0])
  })
});


module.exports = router;