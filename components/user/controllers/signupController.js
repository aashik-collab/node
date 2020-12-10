const User = require('../models/User');
const isemail = require('isemail');
const bcrypt = require('bcryptjs');
const generateToken = require('../../../utils/generateToken');

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!isemail.validate(email)) {
            return res.status(400).json({ success: false, message: 'invalid email' });
        }
        const emailTaken = await User.findOne({ email });
        if (emailTaken) {
            return res.status(400).json({ success: false, message: 'email is already registered' });
        }
        const user = new User();
        user.email = email;
        user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        await user.save();
        const token = generateToken(
            { _id: user._id },
            process.env.JWT_SECRET || 'fallback_secret',
            process.env.JWT_EXPIRATION || '7d'
        );
        return res.status(200).json({ success: true, message: 'signup success', token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    signup,
};
