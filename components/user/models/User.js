const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: [4, 'password should be minimum of 4 chars'],
        maxlength: [200, 'password cannot be longer than 12 chars'],
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('users', User);
