const express = require('express');
const router = express.Router();

const db = require('../conf');

router.get('/',(req, res) => {
  const { projectId } = req.query;
  const where = projectId ? 'WHERE projectId = ?' : '';
  db.query(`select * from event ${where} ORDER BY eventDate ASC`, [projectId], (err, event) => {
    if(err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(event)
  })
});

module.exports = router;