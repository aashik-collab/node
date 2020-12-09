const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomBooks = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref: 'rooms',
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

module.exports = mongoose.model('roomBooks', RoomBooks);
