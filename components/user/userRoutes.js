const Router = require('express').Router();
const verifyUserToken = require('../../middlewares/verifyUserToken');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');

Router.post('/login', loginController.login);
Router.post('/signup', signupController.signup);
Router.post('/admin-login', loginController.adminLogin);

Router.get('/test-middleware', verifyUserToken, async (req, res) => {
    return res.status(200).json({ success: true, message: 'middleware passed' });
});

module.exports = Router;
