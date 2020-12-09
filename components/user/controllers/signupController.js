const signup = async (req, res) => {
    return res.status(200).json({ success: true, message: 'hello world from signup route' });
};

module.exports = {
    signup,
};
