const RoomType = require('../models/RoomTypes');

const createRoomType = async (req, res) => {
    try {
        const { room_type } = req.body;
        const roomTypeExists = RoomType.findOne({ room_type });
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

module.exports = {
    createRoomType,
    updateRoomType,
    viewRoomTypes,
};
