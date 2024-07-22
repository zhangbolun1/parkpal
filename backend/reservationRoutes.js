const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Get all reservations for a user
router.get('/:userId', async (req, res) => {
  try {
    const reservations = await Reservation.find({ userId: req.params.userId }).populate('parkingSpotId');
    res.json(reservations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Make a reservation
router.post('/', async (req, res) => {
  const { parkingSpotId, userId, startTime, endTime } = req.body;
  try {
    const reservation = await Reservation.create({ parkingSpotId, userId, startTime, endTime });
    res.json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;