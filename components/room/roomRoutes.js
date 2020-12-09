const verifyAdminToken = require('../../middlewares/verifyAdminToken');
const verifyUserToken = require('../../middlewares/verifyUserToken');
const roomController = require('./controllers/roomController');

const Router = require('express').Router();

// ROOM ROUTES
Router.post('/create-room', verifyAdminToken, roomController.createRoom);
Router.put('/update-room/:room_id', verifyAdminToken, async (req, res) => {});
Router.delete('/delete-room/:room_id', verifyAdminToken, async (req, res) => {});

// ROOM REVIEWS ROUTES
Router.post('/room-reviews/create/:room_id', async (req, res) => {});
Router.delete('/room-reviews/delete/:room_id', async (req, res) => {});

// ROOM BOOKS ROUTES
Router.post('/room-books/create/:room_id', async (req, res) => {});
Router.delete('/room-books/delete/:room_id', async (req, res) => {});

// ROOM CATEGORIES ROUTES
Router.post('/room-categories/create', async (req, res) => {});
Router.put('/room-categories/update/:room_category_id', async (req, res) => {});
Router.delete('/room-categories/delete/:room_category_id', async (req, res) => {});

// ROOM TYPES ROUTES
Router.post('/room-types/create', async (req, res) => {});
Router.put('/room-types/udpate/:room_type_id', async (req, res) => {});
Router.delete('/room-types/delete/:room-type_id', async (req, res) => {});

module.exports = Router;
