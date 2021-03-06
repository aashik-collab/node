const mongoose = require('mongoose');
const { Schema } = mongoose;

const Hall = new Schema({
    hall_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'hallCategories',
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
    hall_image: {
        type: String,
        maxlength: [1000, 'room_image can be max 1k chars'],
    },
    no_of_people: {
        type: Number,
        min: [1, 'min num of people is 1'],
    },
});

module.exports = mongoose.model('halls', Hall);
