const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
        minlength: [4, 'password should be minimum of 4 chars'],
        maxlength: [12, 'password cannot be longer than 12 chars'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});

module.exports = mongoose.model('users', User);
