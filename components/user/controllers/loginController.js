const login = async (req, res) => {
    return res.status(200).json({ success: true, message: 'hello world from login route' });
};

module.exports = {
    login,
};
