const HallBook = require('../models/HallBooks');

const createHallBook = async (req, res) => {
    try {
        const { checkin_date, checkout_date } = req.body;
        const { hall_id } = req.params;
        const user_id = req.user._id;

        const hallBook = new HallBook();
        hallBook.checkin_date = checkin_date;
        hallBook.checkout_date = checkout_date;
        hallBook.hall_id = hall_id;
        hallBook.user_id = user_id;
        await hallBook.save();
        return res.status(201).json({ success: true, message: 'hall book created' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const deleteHallBook = async (req, res) => {
    try {
        const { hall_book_id } = req.params;
        const user_id = req.user._id;
        const hallBook = await HallBook.findById(hall_book_id);
        if (!hallBook) {
            return res.status(404).json({ success: false, message: 'hall not found' });
        }
        if (hallBook.user_id == user_id || req.user.role === 'admin') {
            await HallBook.deleteOne({ _id: hall_book_id });
            return res.status(200).json({ success: true, message: 'hall book deleted' });
        }
        return res.status(400).json({ success: false, message: 'unable to delete hall book, user_id does not match' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = {
    createHallBook,
    deleteHallBook,
};
