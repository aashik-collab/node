const mongoose = require('mongoose');
const Schema = mongoose;

const Profile = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    username: {
        type: String,
        minlength: [3, 'username cannot be shorter than 3 chars'],
        maxlength: [12, 'username cannot be longert than 12 chars'],
        requried: true,
    },
    contact: {
        type: String,
        maxlength: [14, 'contact cannot be longer than 15 chars'],
        required: true,
    },
    address: {
        type: String,
        minlength: [3, 'address cannot be shorter than 3 chars'],
        maxlength: [100, 'address cannot be longer than 40 chars'],
        required: true,
    },
});

module.exports = mongoose.model('profiles', Profile);
