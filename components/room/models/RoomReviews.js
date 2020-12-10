const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomReviews = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref: 'rooms',
        required: true,
    },
    rate_value: {
        type: Number,
        max: 5,
        min: 1,
        default: 5,
    },
    comment: {
        type: String,
        minlength: [1, 'comment should be at least 1 chars long'],
        maxlength: [1000, 'comment cannnot be longer than 1k chars'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('roomReviews', RoomReviews);
