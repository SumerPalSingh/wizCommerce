// backend/routes/bookings.js
const express = require('express');
const router = express.Router();
const { bookSlot } = require('./controllers/bookingController');

router.post('/', bookSlot);
router.get('/user/:email', getUserBookings);
module.exports = router;
