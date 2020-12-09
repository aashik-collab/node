const mongoose = require('mongoose');
const { Schema } = mongoose;

const HallBooks = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    hall_id: {
        type: Schema.Types.ObjectId,
        ref: 'halls',
    },
    checkin_date: {
        type: Date,
        required: true,
    },
    checkout_date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('hallBooks', HallBooks);
