const jwt = require('jsonwebtoken');

const generateToken = (payload, secret_key, expiresIn) => {
    const token = jwt.sign(payload, secret_key, { expiresIn: expiresIn });
    return token;
};

module.exports = generateToken;
