const express = require('express');
const moment = require('moment');
const router = express.Router();

const db = require('../conf');

const splitDateTime = event => {
  const m = moment(event.date);
  delete event.date;
  const eventDate = m.format('YYYY-MM-DD');
  const eventHour = m.format('HH:mm');
  return { ...event, eventDate, eventHour };
};

router.get('/',(req, res) => {
  const { projectId } = req.query;

  const query = projectId
    ? `select * from event WHERE projectId = ? AND date > NOW() ORDER BY date ASC`
    : `select * from event WHERE date > NOW() ORDER BY date ASC`;
  const params = projectId ? [projectId] : [];
  db.queryAsync(query, params)
    .then(events => events.map(splitDateTime))
    .then(events => res.json(events))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;