const Room = require('../models/Room');
const RoomBook = require('../models/RoomBooks');

const createRoomBook = async (req, res) => {
    try {
        const { checkin_date, checkout_date } = req.body;
        const { room_id } = req.params;
        const user_id = req.user._id;

        const room = await Room.findById(room_id).select('_id availability');
        if (!room) {
            return res.status(404).json({ success: false, message: 'room not found' });
        }
        if (!room.availability) {
            return res.status(400).json({ success: false, message: 'sorry, hall has already been booked' });
        }

        const roomBook = new RoomBook();
        roomBook.checkin_date = checkin_date;
        roomBook.checkout_date = checkout_date;
        roomBook.room_id = room_id;
        roomBook.user_id = user_id;
        await roomBook.save();

        room.availability = false;
        await room.save();

        return res.status(201).json({ success: true, message: 'room book created' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const deleteRoomBook = async (req, res) => {
    try {
        const { room_book_id } = req.params;
        const user_id = req.user._id;
        const roomBook = await RoomBook.findById(room_book_id);
        if (!roomBook) {
            return res.status(404).json({ success: false, message: 'room book details not found' });
        }

        if (roomBook.user_id == user_id || req.user.role === 'admin') {
            const room = await Room.findById(roomBook.room_id).select('_id availability');
            if (!room) {
                return res.status(404).json({ success: false, message: 'room not found' });
            }

            await RoomBook.deleteOne({ _id: room_book_id });

            room.availability = true;
            room.save();

            return res.status(200).json({ success: true, message: 'room book deleted' });
        }
        return res.status(400).json({ success: false, message: 'unable to delete room book, user_id does not match' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createRoomBook,
    deleteRoomBook,
};
