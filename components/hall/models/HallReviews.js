const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomReviews = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    hall_id: {
        type: Schema.Types.ObjectId,
        ref: 'halls',
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
});

module.exports = mongoose.model('roomReviews', RoomReviews);
