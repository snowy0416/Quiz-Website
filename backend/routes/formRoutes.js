const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Handle form submission
router.post('/submit', formController.handleFormSubmission);

module.exports = router;
