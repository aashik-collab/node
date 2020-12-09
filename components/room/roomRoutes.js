const verifyAdminToken = require('../../middlewares/verifyAdminToken');
const verifyUserToken = require('../../middlewares/verifyUserToken');

const roomBooksController = require('./controllers/roomBooksController');
const roomCategoriesController = require('./controllers/roomCategoriesController');
const roomController = require('./controllers/roomController');
const roomReviewsController = require('./controllers/roomReviewsController');
const roomTypesController = require('./controllers/roomTypesController');

const Router = require('express').Router();

// ROOM ROUTES
Router.post('/create-room', verifyAdminToken, roomController.createRoom);
Router.put('/update-room/:room_id', verifyAdminToken, roomController.updateRoom);
Router.delete('/delete-room/:room_id', verifyAdminToken, roomController.deleteRoom);

// ROOM REVIEWS ROUTES
Router.post('/room-reviews/create/:room_id', verifyUserToken, roomReviewsController.createRoomReview);
Router.delete('/room-reviews/delete/:room_review_id', verifyUserToken, roomReviewsController.deleteRoomReview);
Router.get('room-reviews/view-room-reviews/:room_id', roomReviewsController.viewRoomReviews);

// ROOM BOOKS ROUTES
Router.post('/room-books/create/:room_id', verifyUserToken, roomBooksController.createRoomBook);
Router.delete('/room-books/delete/:room_book_id', verifyUserToken, roomBooksController.deleteRoomBook);

// ROOM CATEGORIES ROUTES
Router.post('/room-categories/create', verifyAdminToken, roomCategoriesController.createRoomCategory);
Router.put('/room-categories/update/:room_category_id', verifyAdminToken, roomCategoriesController.updateRoomCategory);
Router.get('/room-categories/view-room-categories', roomCategoriesController.viewRoomCategories);

// ROOM TYPES ROUTES
Router.post('/room-types/create', verifyAdminToken, roomTypesController.createRoomType);
Router.put('/room-types/update/:room_type_id', verifyAdminToken, roomTypesController.updateRoomType);
Router.get('/room-types/view-room-types', roomTypesController.viewRoomTypes);

module.exports = Router;
