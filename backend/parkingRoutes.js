const express = require('express');
const router = express.Router();
const ParkingSpot = require('../models/ParkingSpot');

// Get all parking spots
router.get('/', async (req, res) => {
  try {
    const parkingSpots = await ParkingSpot.find();
    res.json(parkingSpots);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new parking spot
router.post('/', async (req, res) => {
  const { location, type, availability, hourlyRate } = req.body;
  try {
    const parkingSpot = await ParkingSpot.create({ location, type, availability, hourlyRate });
    res.json(parkingSpot);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;