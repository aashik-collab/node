const User = require('../components/user/models/User');
const jwt = require('jsonwebtoken');

const verifyAdminToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ success: false, message: 'token not received' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        const admin = await User.findById(decoded._id).select('_id email role');
        if (!admin || admin.role !== 'admin') {
            return res.status(401).json({ success: false, message: 'invalid token received' });
        }
        req.admin = admin;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: true, message: err.message });
    }
};

module.exports = verifyAdminToken;
