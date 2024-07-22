const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  parkingSpotId: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingSpot', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  paymentStatus: { type: String, default: 'Pending' },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;