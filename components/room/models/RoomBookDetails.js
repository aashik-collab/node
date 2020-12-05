const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomBookDetails = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    checkin_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    checkout_date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('roomBookDetails', RoomBookDetails);
