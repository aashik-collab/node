const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomCategories = new Schema({
    room_category: {
        type: String,
        minlength: [2, 'room category cannot be shorter than 2 chars'],
        maxlength: [20, 'room category cannot be longer than 30 chars'],
        required: true,
    },
});

module.exports = mongoose.model('roomCategories', RoomCategories);
