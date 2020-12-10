const User = require('../components/user/models/User');
const jwt = require('jsonwebtoken');

// NOTE: verifyUserToken also verfies admin by default as there are no role checks
const verifyUserToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ success: false, message: 'token not received' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        const user = await User.findById(decoded._id).select('_id email role');
        if (!user) {
            return res.status(401).json({ success: false, message: 'user associated with the token not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = verifyUserToken;
