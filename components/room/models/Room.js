const mongoose = require('mongoose');
const { Schema } = mongoose;

const Room = new Schema({
    room_book_details_id: {
        type: Schema.Types.ObjectId,
        ref: 'roomBookDetails',
    },
    room_type_id: {
        type: Schema.Types.ObjectId,
        ref: 'roomTypes',
        requried: true,
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
        required: false,
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
        required: false,
    },
});

module.exports = mongoose.model('rooms', Room);
