const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomTypes = new Schema({
    room_type: {
        type: String,
        minlength: [2, 'room type cannot be shorter than 2 chars'],
        maxlength: [20, 'room type cannot be longer than 30 chars'],
        required: true,
    },
});

module.exports = mongoose.model('roomTypes', RoomTypes);
