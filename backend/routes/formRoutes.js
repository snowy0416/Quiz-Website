const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route for sign-in form submission
router.post('/signin', formController.handleFormSubmission);

// Route for contact form submission
router.post('/submit',formController.handleFormSubmission2);

//Route for login form submission
router.post('/login', formController.handleLogin);

module.exports = router;
