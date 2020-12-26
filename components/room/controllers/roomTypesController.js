const RoomType = require('../models/RoomTypes');

const createRoomType = async (req, res) => {
    try {
        const { room_type } = req.body;
        const roomTypeExists = await RoomType.findOne({ room_type });
        console.log(roomTypeExists);
        if (roomTypeExists) {
            return res.status(400).json({ success: false, message: 'room type already exists' });
        }
        const roomType = new RoomType();
        roomType.room_type = room_type;
        await roomType.save();
        return res.status(201).json({ success: true, message: 'room type created' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const updateRoomType = async (req, res) => {
    try {
        const { room_type } = req.body;
        const { room_type_id } = req.params;
        const roomType = await RoomType.findById(room_type_id);
        if (!roomType) {
            return res.status(404).json({ success: false, message: 'roomType not found' });
        }
        roomType.room_type = room_type ? room_type : roomType.room_type;
        await roomType.save();
        return res.status(200).json({ success: true, message: 'room_type updated' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

const viewRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find({}).sort({ room_type: 'asc' });
        return res.status(200).json({ success: true, roomTypes });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

const deleteRoomType = async (req, res) => {
    try {
        const { room_type_id } = req.params;
        if (!room_type_id) {
            return res.status(400).json({ success: false, message: 'room_type_id not received' });
        }
        const roomType = await RoomType.findById(room_type_id).select('_id');
        if (!roomType) {
            return res.status(404).json({ success: false, message: 'the room type was not found' });
        }
        await RoomType.deleteOne({ _id: room_type_id });
        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createRoomType,
    updateRoomType,
    viewRoomTypes,
    deleteRoomType,
};
