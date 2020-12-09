const mongoose = require('mongoose');
const { Schema } = mongoose;

const HallCategories = new Schema({
    hall_category: {
        type: String,
        minlength: [2, 'hall category cannot be shorter than 2 chars'],
        maxlength: [20, 'hall category cannot be longer than 30 chars'],
        required: true,
    },
});

module.exports = mongoose.model('hallCategories', HallCategories);
