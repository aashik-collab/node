const HallReviews = require('../models/HallReviews');
const Hall = require('../models/Hall');

const createHallReview = async (req, res) => {
    try {
        const { hall_id } = req.params;
        const { rate_value, comment } = req.body;

        const hall = await Hall.findById(hall_id).select('_id');
        if (!hall) {
            return res.status(404).json({ success: false, message: 'hall not found' });
        }
        const hallReview = new HallReviews();
        hallReview.user_id = req.user._id;
        hallReview.hall_id = hall_id;
        hallReview.rate_value = rate_value;
        hallReview.comment = comment;
        await hallReview.save();

        return res.status(201).json({ success: true, message: 'hall review created' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

const deleteHallReview = async (req, res) => {
    try {
        const { hall_review_id } = req.params;
        const hallReview = await HallReviews.findById(hall_review_id).select('_id user_id');
        if (!hallReview) {
            return res.status(404).json({ success: false, message: 'review not found' });
        }
        if (req.user._id != hallReview.user_id && req.user.role !== 'admin') {
            return res.status(400).json({ success: false, message: 'unable to delete review, user_id does not match' });
        }
        await HallReviews.deleteOne({ _id: hall_review_id });
        return res.status(200).json({ success: true, message: 'hall review deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createHallReview,
    deleteHallReview,
};
