const verifyAdminToken = require('../../middlewares/verifyAdminToken');
const verifyUserToken = require('../../middlewares/verifyUserToken');
const hallBooksController = require('./controllers/hallBooksController');
const hallCategoriesController = require('./controllers/hallCategoriesController');
const hallController = require('./controllers/hallController');
const hallReviewsController = require('./controllers/hallReviewsController');

const Router = require('express').Router();

// HALL ROUTES
Router.post('/create-hall', verifyAdminToken, hallController.createHall);
Router.put('/update-hall/:hall_id', verifyAdminToken, hallController.updateHall);
Router.delete('/delete-hall/:hall_id', verifyAdminToken, hallController.deleteHall);
Router.get('/view-hall-with-reviews/:hall_id', hallController.viewHallReviews);
Router.get('/view-hall-with-bookings/:hall_id', verifyUserToken, hallController.viewHallBookings);

// HALL REVIEWS ROUTES
Router.post('/hall-reviews/create/:hall_id', verifyUserToken, hallReviewsController.createHallReview);
Router.delete('/hall-reviews/delete/:hall_review_id', verifyUserToken, hallReviewsController.deleteHallReview);

// HALL BOOKS ROUTES
Router.post('/hall-books/create/:hall_id', verifyUserToken, hallBooksController.createHallBook);
Router.delete('/hall-books/delete/:hall_book_id', verifyUserToken, hallBooksController.deleteHallBook);

// HALL CATEGORIES ROUTES
Router.post('/hall-categories/create', hallCategoriesController.createHallCategory);
Router.put('/hall-categories/update/:hall_category_id', hallCategoriesController.updateHallCategory);
Router.get('/hall-categories/view-hall-categories', hallCategoriesController.viewHallCategories);

/*
 *************************** MAKING API PHASE 2 ***************************
 */
Router.get('/fetch-some-halls-for-homepage', hallController.fetchSomeHallsForHomepage);
Router.get('/fetch-all-halls', hallController.fetchAllHalls);

module.exports = Router;
