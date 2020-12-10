const verifyAdminToken = require('../../middlewares/verifyAdminToken');
const verifyUserToken = require('../../middlewares/verifyUserToken');
const hallController = require('./controllers/hallController');
const hallReviewsController = require('./controllers/hallReviewsController');

const Router = require('express').Router();

// HALL ROUTES
Router.post('/create-hall', verifyAdminToken, hallController.createHall);
Router.put('/update-hall/:hall_id', verifyAdminToken, hallController.updateHall);
Router.delete('/delete-hall/:hall_id', verifyAdminToken, hallController.deleteHall);
Router.get('/view-hall-with-reviews/:hall_id', hallController.viewHallReviews);
Router.get('/view-hall-with-bookings/:hall_id', verifyAdminToken, hallController.viewHallBookings);

// HALL REVIEWS ROUTES
Router.post('/hall-reviews/create', verifyUserToken, hallReviewsController.createHallReview);
Router.delete('/hall-reviews/delete/:hall_review_id', verifyUserToken, hallReviewsController.deleteHallReview);

// HALL BOOKS ROUTES
Router.post('/hall-books/create', async (req, res) => {});
Router.delete('/hall-books/delete/:hall_book_id', async (req, res) => {});

// HALL CATEGORIES ROUTES
Router.post('/hall-categories/create', async (req, res) => {});
Router.put('/hall-categories/update/:hall_category_id', async (req, res) => {});
Router.get('/hall-categories/view-hall-categories', async (req, res) => {});

module.exports = Router;
