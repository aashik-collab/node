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
Router.get('/view-room-with-bookings/:room_id', verifyAdminToken, roomController.viewRoomBookings);
Router.get('/view-room-with-reviews/:room_id', roomController.viewRoomWithReviews);

// ROOM REVIEWS ROUTES
Router.post('/room-reviews/create/:room_id', verifyUserToken, roomReviewsController.createRoomReview);
Router.delete('/room-reviews/delete/:room_review_id', verifyUserToken, roomReviewsController.deleteRoomReview);
Router.get('/room-reviews/view/:room_id', roomReviewsController.viewRoomReviews);

// ROOM BOOKS ROUTES
Router.post('/room-books/create/:room_id', verifyUserToken, roomBooksController.createRoomBook);
Router.delete('/room-books/delete/:room_book_id', verifyUserToken, roomBooksController.deleteRoomBook);

// ROOM CATEGORIES ROUTES
Router.post('/room-categories/create', verifyAdminToken, roomCategoriesController.createRoomCategory);
Router.put('/room-categories/update/:room_category_id', verifyAdminToken, roomCategoriesController.updateRoomCategory);
Router.get('/room-categories/view-room-categories', roomCategoriesController.viewRoomCategories);
Router.delete(
    '/room-categories/delete-room-category/:room_category_id',
    verifyAdminToken,
    roomCategoriesController.deleteRoomCategory
);

// ROOM TYPES ROUTES
Router.post('/room-types/create', verifyAdminToken, roomTypesController.createRoomType);
Router.put('/room-types/update/:room_type_id', verifyAdminToken, roomTypesController.updateRoomType);
Router.get('/room-types/view-room-types', roomTypesController.viewRoomTypes);
Router.delete('/room-types/delete-room-type/:room_type_id', verifyAdminToken, roomTypesController.deleteRoomType);

/*
 *************************** MAKING API PHASE 2 ***************************
 */
Router.get('/fetch-some-rooms-for-homepage', roomController.fetchSomeRoomsForHomepage);
Router.get('/fetch-all-rooms', roomController.fetchAllRooms);

module.exports = Router;
