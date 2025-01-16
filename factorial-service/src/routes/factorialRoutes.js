const express = require('express');
const { calculateFactorial } = require('../controllers/factorialController');

const router = express.Router();

router.post('/', calculateFactorial);

module.exports = router;