const Hall = require('../models/Hall');
const HallReviews = require('../models/HallReviews');
const HallBooks = require('../models/HallBooks');

const createHall = async (req, res) => {
    try {
        const { hall_category_id, price, discount, availability, title, description, hall_image } = req.body;

        const hall = new Hall();
        hall.hall_category_id = hall_category_id;
        hall.price = price;
        hall.discount = discount;
        hall.availability = availability;
        hall.title = title;
        hall.description = description;
        hall.hall_image = hall_image;

        await hall.save();
        return res.status(201).json({ success: true, message: 'hall created' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const updateHall = async (req, res) => {
    try {
        const { hall_category_id, price, discount, availability, title, description, hall_image } = req.body;

        hall = await Hall.findById(req.params.hall_id);
        hall.room_category_id = hall_category_id ? hall_category_id : hall.hall_category_id;
        hall.price = price ? price : hall.price;
        hall.discount = discount ? discount : hall.discount;
        hall.availability = availability ? availability : hall.availability;
        hall.title = title ? title : hall.title;
        hall.description = description ? description : hall.description;
        hall.hall_image = hall_image ? hall_image : hall.hall_image;

        return res.status(200).json({ success: true, message: 'hall updated' });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const deleteHall = async (req, res) => {
    const hall = await Hall.findById(req.params.hall_id);
    if (!hall) {
        return res.status(404).json({ success: false, message: 'hall not found' });
    }
    await Hall.deleteOne({ _id: req.params.hall_id });
    await HallReviews.deleteMany({ hall_id: req.params.hall_id });
    await HallBooks.deleteMany({ hall_id: req.params.hall_id });
    return res
        .status(200)
        .json({ success: true, message: 'hall deleted along with associated hall_reviews and hall_books' });
};
const viewHallReviews = async (req, res) => {
    try {
        const { hall_id } = req.params;
        const hall = await Hall.findById(hall_id);
        if (!hall) {
            return res.status(404).json({ success: false, message: 'hall not found' });
        }
        const hallReviews = await HallReviews.find({ hall_id }).sort({ created_at: 'desc' });
        return res.status(200).json({ success: true, hall, hallReviews });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};
const viewHallBookings = async (req, res) => {
    try {
        const { hall_id } = req.params;
        const hall = await Hall.findById(hall_id);
        if (!hall) {
            return res.status(404).json({ success: false, message: 'hall not found' });
        }
        const hallBookings = await HallBooks.find({ hall_id }).sort({ created_at: 'desc' });
        return res.status(200).json({ success: true, hall, hallBookings });
    } catch (err) {
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

const fetchSomeHallsForHomepage = async (req, res) => {
    try {
        let halls = await Hall.find().limit(6).sort({ created_at: 'desc' });

        const promises = halls.map(async (hall) => {
            const hallReviews = await HallReviews.find({ hall_id: hall._id }).select('_id rate_value');
            if (!hallReviews.length) {
                return {
                    ...hall._doc,
                    hallRating: 0,
                    hallReviewsCount: 0,
                };
            }
            const hallRatingSum = hallReviews.reduce((accumulator, item) => {
                return accumulator.rate_value + item.rate_value;
            });
            return {
                ...hall._doc,
                hallRating: hallRatingSum / hallReviews.length,
                hallReviewsCount: hallReviews.length,
            };
        });

        halls = await Promise.all(promises);

        return res.status(200).json({ success: true, halls });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

const fetchAllHalls = async (req, res) => {
    let halls = await Hall.find().sort({ created_at: 'desc' });

    const promises = halls.map(async (hall) => {
        const hallReviews = await HallReviews.find({ hall_id: hall._id }).select('_id rate_value');

        if (!hallReviews.length) {
            return {
                ...hall._doc,
                hallRating: 0,
                hallReviewsCount: 0,
            };
        }
        const hallRatingSum = HallReviews.reduce((acc, item) => {
            return acc.rate_value + item.rate_value;
        });
        return {
            ...hall._doc,
            hallRating: hallRatingSum / hallReviews.length,
            hallReviewsCount: hallReviews.length,
        };
    });

    halls = await Promise.all(promises);
    return res.status(200).json({ success: true, halls });
};

module.exports = {
    createHall,
    updateHall,
    deleteHall,
    viewHallReviews,
    viewHallBookings,
    fetchSomeHallsForHomepage,
    fetchAllHalls,
};
