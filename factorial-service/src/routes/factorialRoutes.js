const express = require('express');
const { calculateFactorial } = require('../controllers/factorialController');

const router = express.Router();

router.post('/calculate', calculateFactorial);

module.exports = router;