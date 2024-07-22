const mongoose = require('mongoose');

const ParkingSpotSchema = new mongoose.Schema({
  location: { type: String, required: true },
  type: { type: String, required: true },
  availability: { type: Boolean, default: true },
  hourlyRate: { type: Number, required: true },
});

const ParkingSpot = mongoose.model('ParkingSpot', ParkingSpotSchema);
module.exports = ParkingSpot;