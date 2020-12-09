const RoomReview = require('../models/RoomReviews');
const Room = require('../models/Room');

const createRoomReview = async (req, res) => {
    try {
        const { room_id } = req.params;
        const { rate_value, comment } = req.body;

        const room = await Room.findById(room_id).select('_id');
        if (!room) {
            return res.status(404).json({ success: false, message: 'room not found' });
        }
        const roomReview = new RoomReview();
        roomReview.user_id = req.user._id;
        roomReview.room_id = room_id;
        roomReview.rate_value = rate_value;
        roomReview.comment = comment;
        await roomReview.save();
        return res.status(201).json({ success: true, message: 'room review created' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const deleteRoomReview = async (req, res) => {
    try {
        const { room_review_id } = req.params;
        const roomReview = await RoomReview.findById(room_review_id).select('_id user_id');
        if (!roomReview) {
            return res.status(404).json({ success: false, message: 'review not found' });
        }
        if (req.user._id != roomReview.user_id && req.user.role !== 'admin') {
            return res.status(400).json({ success: false, message: 'unable to delete review, user_id does not match' });
        }
        await RoomReview.deleteOne({ _id: room_review_id });
        return res.status(200).json({ success: true, message: 'room review deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createRoomReview,
    deleteRoomReview,
};
