const express = require('express');
const router = express.Router();
const db = require('../../conf');
const expressJwt = require('express-jwt');
const { secretKey } = require('../../settings.env');
const { formatProjectDates } = require('../../helpers/formatDate');

const checkAuthorizationHeader = expressJwt({
  secret: secretKey
})

//route Profil
router.get('/:id', checkAuthorizationHeader, (req,res) => {
  db.query('select * from user where id = ?',[req.params.id], (err, user) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    if(user.length === 0) {
      return res.status(404).json({
        err: `id ${req.params.id} not found`
      })
    }
    res.status(200).json(user[0])
  })
});

const readUserFavorites = userId => {
  const query = 'SELECT projectId FROM favorite WHERE userId = ?';
  return db.queryAsync(query, userId)
    .then(favorites => favorites.map(({ projectId }) => projectId));
}

// route Profil => pour accéder à mes favoris
router.get('/:id/favorite-ids', checkAuthorizationHeader, (req,res) => {
  const userId = req.user.id;
  readUserFavorites(userId)
    .then(favProjectIds => res.status(200).json(favProjectIds))
    .catch(err => res.status(500).json({
      err: err.message,
      error_details: err.sql
    }));
});

const getProjects = projectIds => {
  const where = projectIds.length > 0
    ? ` id IN(${projectIds.join()})`
    : 0;
  return db.queryAsync(`SELECT * FROM project WHERE ${where}`)
    .then(projects => projects.map(formatProjectDates))
}

// route Profil => pour accéder aux données elles mêmes des projets
// et pas seulement à leurs id
router.get('/:id/favorite', checkAuthorizationHeader, (req, res) => {
  const userId = req.user.id;
  readUserFavorites(userId)
    .then(getProjects)
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({
      err: err.message,
      error_details: err.sql
    }));
});

router.put('/:id/favorite', checkAuthorizationHeader, (req,res) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  db.queryAsync('SELECT id FROM favorite WHERE userId = ? AND projectId = ?', [userId, projectId])
    .then(favorites => favorites[0])
    .then(favorite => favorite
      ? db.queryAsync('DELETE FROM favorite WHERE id = ?', favorite.id)
      : db.queryAsync('INSERT INTO favorite SET ?', { userId, projectId })
    )
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).json({
        error: err.message,
        errorDetails: err.sql
      }))
});

// route Profil => pour accéder à mes missions, mes initiatives
router.get('/:id/:type', checkAuthorizationHeader, (req,res) => {
  let type = req.params.type;
  let id = req.user.id;
  db.query(`SELECT * FROM project WHERE projectType=\'${type}\' AND userId=\'${id}\'`,[req.params.id], (err,projects) => {
    if(err) {
      return res.status(500).json({
        err: err.message,
        error_details: err.sql
      })
    }
    res.status(200).json(projects.map(formatProjectDates))
  })
});

module.exports = router;