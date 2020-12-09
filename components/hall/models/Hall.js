const mongoose = require('mongoose');
const { Schema } = mongoose;

const Hall = new Schema({
    hall_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'hallCategories',
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
    hall_image: {
        type: String,
        required: true,
        maxlength: [1000, 'room_image can be max 10k chars'],
    },
});

module.exports = mongoose.model('halls', Hall);
