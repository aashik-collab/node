const RoomCategory = require('../models/RoomCategories');

const createRoomCategory = async (req, res) => {
    try {
        const { room_category } = req.body;
        const roomCategoryExists = await RoomCategory.findOne({ room_category });
        if (roomCategoryExists) {
            return res.status(400).json({ success: false, message: 'room category already exists' });
        }
        const roomCategory = new RoomCategory();
        roomCategory.room_category = room_category;
        await roomCategory.save();
        return res.status(201).json({ success: true, message: 'room category created' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const updateRoomCategory = async (req, res) => {
    try {
        const { room_category } = req.body;
        const { room_category_id } = req.params;
        const roomCategory = await RoomCategory.findById(room_category_id);
        if (!roomCategory) {
            return res.status(404).json({ success: false, message: 'room category not found' });
        }
        roomCategory.room_category = room_category ? room_category : roomCategory.room_category;
        await roomCategory.save();
        return res.status(200).json({ success: true, message: 'room cateogry updated' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const viewRoomCategories = async (req, res) => {
    try {
        const roomCategories = await RoomCategory.find().sort({ room_category: 'asc' });
        return res.status(200).json({ success: true, roomCategories });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createRoomCategory,
    updateRoomCategory,
    viewRoomCategories,
};
