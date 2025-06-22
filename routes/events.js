// backend/routes/events.js
const express = require('express');
const router = express.Router();
const { createEvent, listEvents, getEventDetails } = require('./controllers/eventController');

router.post('/', createEvent);
router.get('/', listEvents);
router.get('/:id', getEventDetails);

module.exports = router;
