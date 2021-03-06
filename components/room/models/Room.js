const mongoose = require('mongoose');
const { Schema } = mongoose;

const Room = new Schema({
    room_type_id: {
        type: Schema.Types.ObjectId,
        ref: 'roomTypes',
        required: true,
    },
    room_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'roomCategories',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        minlength: [3, 'title cannot be shorter than 3 chars'],
        maxlength: [200, 'title cannot be longer than 200 chars'],
        required: true,
    },
    description: {
        type: String,
        maxlength: [1000, 'description cannot be longer than 1k chars'],
    },
    room_image: {
        type: String,
        maxlength: [1000, 'room_image can be max 1k chars'],
    },
    no_of_people: {
        type: Number,
        min: [1, 'min no of people is 1'],
    },
});

module.exports = mongoose.model('rooms', Room);
