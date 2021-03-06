const User = require('../models/User');

const bcrypt = require('bcryptjs');
const generateToken = require('../../../utils/generateToken');

const login = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).json({ success: false, message: 'user not found' });
      }
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (!passwordMatch) {
         return res.status(400).json({ success: false, message: 'password does not match' });
      }
      const token = generateToken(
         { _id: user._id },
         process.env.JWT_SECRET || 'fallback_secret',
         process.env.JWT_EXPIRATION || '7d'
      );
      return res.status(200).json({ success: true, message: 'login success', token });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

const adminLogin = async (req, res) => {
   try {
      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
         return res.status(404).json({ success: false, message: 'user not found' });
      }
      if (user.role !== 'admin') {
         return res.status(401).json({ success: false, message: 'sorry this email does not belong to an admin' });
      }
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (!passwordMatch) {
         return res.status(400).json({ success: false, message: 'password does not match' });
      }

      const token = generateToken(
         { _id: user._id },
         process.env.JWT_SECRET || 'fallback_secret',
         process.env.JWT_EXPIRATION_ADMIN || '7h'
      );
      return res.status(200).json({ success: true, message: 'login success', adminToken: token });
   } catch (err) {
      return res.status(500).json({ success: false, error: true, message: err.message });
   }
};

module.exports = {
   login,
   adminLogin,
};
