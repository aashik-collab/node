const Room = require('../models/Room');
const RoomBooks = require('../models/RoomBooks');
const RoomReviews = require('../models/RoomReviews');

const createRoom = async (req, res) => {
   try {
      const {
         room_category_id,
         room_type_id,
         price,
         discount,
         availability,
         title,
         description,
         room_image,
         no_of_people,
      } = req.body;

      const room = new Room();
      room.room_category_id = room_category_id;
      room.room_type_id = room_type_id;
      room.price = price;
      room.discount = discount;
      room.availability = availability;
      room.title = title;
      room.description = description;
      room.room_image = room_image;
      room.no_of_people = no_of_people;

      await room.save();
      return res.status(201).json({ success: true, message: 'room created' });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const updateRoom = async (req, res) => {
   try {
      const {
         room_category_id,
         room_type_id,
         price,
         discount,
         availability,
         title,
         description,
         room_image,
      } = req.body;

      room = await Room.findById(req.params.room_id);
      room.room_category_id = room_category_id ? room_category_id : room.room_category_id;
      room.room_type_id = room_type_id ? room_type_id : room.room_type_id;
      room.price = price ? price : room.price;
      room.discount = discount ? discount : room.discount;
      room.availability = availability ? availability : room.availability;
      room.title = title ? title : room.title;
      room.description = description ? description : room.description;
      room.room_image = room_image ? room_image : room.room_image;

      return res.status(200).json({ success: true, message: 'room updated' });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const deleteRoom = async (req, res) => {
   const room = await Room.findById(req.params.room_id);
   if (!room) {
      return res.status(404).json({ success: false, message: 'room not found' });
   }
   await Room.deleteOne({ _id: req.params.room_id });
   await RoomReviews.deleteMany({ room_id: req.params.room_id });
   await RoomBooks.deleteMany({ room_id: req.params.room_id });
   return res
      .status(200)
      .json({ success: true, message: 'room deleted along with associated room_reviews and room_books' });
};

const viewRoomWithReviews = async (req, res) => {
   try {
      const { room_id } = req.params;
      const room = await Room.findById(room_id);
      if (!room) {
         return res.status(404).json({ success: false, message: 'room not found' });
      }

      const roomReviews = await RoomReviews.find({ room_id }).sort({ created_at: 'desc' }).populate('user_id', 'email');

      let roomRatingSum = 0;

      roomReviews.forEach((review) => {
         roomRatingSum += review.rate_value;
      });

      return res.status(200).json({
         success: true,
         room: {
            ...room._doc,
            avg_rating: roomRatingSum / roomReviews.length,
         },
         roomReviews,
      });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const viewRoomBookings = async (req, res) => {
   try {
      const { room_id } = req.params;
      const room = await Room.findById(room_id);
      if (!room) {
         return res.status(404).json({ success: false, message: 'room not found' });
      }
      const roomBookings = await RoomBooks.find({ room_id }).sort({ created_at: 'desc' });
      return res.status(200).json({ success: true, room, roomBookings });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const fetchSomeRoomsForHomepage = async (req, res) => {
   try {
      let rooms = await Room.find().limit(6).sort({ created_at: 'desc' });

      const promises = rooms.map(async (room) => {
         const roomReviews = await RoomReviews.find({ room_id: room._id }).select('_id rate_value');
         if (!roomReviews.length) {
            return {
               ...room._doc,
               avg_rating: 0,
               reviewsCount: 0,
            };
         }

         let roomRatingSum = 0;
         roomReviews.forEach((review) => {
            roomRatingSum += review.rate_value;
         });

         return {
            ...room._doc,
            avg_rating: roomRatingSum / roomReviews.length,
            reviewsCount: roomReviews.length,
         };
      });

      rooms = await Promise.all(promises);

      return res.status(200).json({ success: true, rooms });
   } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const fetchAllRooms = async (req, res) => {
   let rooms = await Room.find().sort({ created_at: 'desc' });
   const promises = rooms.map(async (room) => {
      const roomReviews = await RoomReviews.find({ room_id: room._id }).select('_id rate_value');
      if (!roomReviews.length) {
         return {
            ...room._doc,
            avg_rating: 0,
            reviewsCount: 0,
         };
      }

      let roomRatingSum = 0;
      roomReviews.forEach((review) => {
         roomRatingSum += review.rate_value;
      });

      return {
         ...room._doc,
         avg_rating: roomRatingSum / roomReviews.length,
         reviewsCount: roomReviews.length,
      };
   });
   rooms = await Promise.all(promises);
   return res.status(200).json({ success: true, rooms });
};

module.exports = {
   createRoom,
   updateRoom,
   deleteRoom,
   viewRoomWithReviews,
   viewRoomBookings,
   fetchSomeRoomsForHomepage,
   fetchAllRooms,
};
