const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   location: {
      type: String,
   },
   phone: {
      type: String,
   },
   dateTime: {
      type: Date,
   },
   room_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'rooms',
   },
   hall_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'halls',
   },
   completed: {
      type: Boolean,
      default: false,
   },
});

module.exports = mongoose.model('bookings', BookingSchema);
