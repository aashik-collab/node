const Router = require('express').Router();
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');

Router.post('/login', loginController.login);
Router.post('/signup', signupController.signup);

module.exports = Router;
