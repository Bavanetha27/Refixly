const express = require('express');
const router = express.Router();
const { getTutorials } = require('../Controllers/tutorialController');

// When a GET request is made to /:objectName, call the getTutorials function
router.get('/:objectName', getTutorials);

module.exports = router;