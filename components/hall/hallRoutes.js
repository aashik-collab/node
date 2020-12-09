const Router = require('express').Router();

// HALL ROUTES
Router.post('/create-hall', async (req, res) => {});
Router.put('/update-hall/:hall_id', async (req, res) => {});
Router.delete('/delete-hall/:hall_id', async (req, res) => {});
Router.get('/view-hall/:hall_id', async (req, res) => {});

// HALL REVIEWS ROUTES
Router.post('/hall-reviews/create', async (req, res) => {});
Router.delete('/hall-reviews/delete/:hall_review_id', async (req, res) => {});

// HALL CATEGORIES ROUTES
Router.post('/hall-categories/create', async (req, res) => {});
Router.delete('/hall-categories/update/:hall_category_id', async (req, res) => {});
Router.delete('/hall-categories/delete/:hall_category_id', async (req, res) => {});

// HALL BOOKS ROUTES
Router.post('/hall-books/create', async (req, res) => {});
Router.delete('/hall-books/delete/:hall_book_id', async (req, res) => {});

module.exports = Router;
