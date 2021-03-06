const BookingSchema = require('./Schema');

const router = require('express').Router();

router.post('/bookings/rooms/:room_id', async (req, res) => {
   try {
      const { room_id } = req.params;
      const { name, location, phone, dateTime } = req.body;

      const booking = new BookingSchema({
         name,
         location,
         phone,
         dateTime,
         room_id,
      });

      await booking.save();
      return res.status(201).json({ success: true, message: 'booking created' });
   } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: err.message });
   }
});

router.post('/bookings/halls/:hall_id', async (req, res) => {
   try {
      const { hall_id } = req.params;
      const { name, location, phone, dateTime } = req.body;

      const booking = new BookingSchema({
         name,
         location,
         phone,
         dateTime,
         hall_id,
      });

      await booking.save();
      return res.status(201).json({ success: true, message: 'booking created' });
   } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
   }
});

router.put('/bookings/complete/:booking_id', async (req, res) => {
   try {
      const { booking_id } = req.params;
      const booking = await BookingSchema.findOne({ _id: booking_id });
      booking.completed = true;
      await booking.save();
      return res.status(200).json({ success: true, message: 'booking completion successful' });
   } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
   }
});

router.get('/bookings', async (req, res) => {
   try {
      const bookings = await BookingSchema.find({}).populate('room_id').populate('hall_id').sort('-dateTime');
      return res.status(200).json({ success: true, bookings });
   } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: err.message });
   }
});

module.exports = router;
