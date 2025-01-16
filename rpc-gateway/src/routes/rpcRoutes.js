const express = require('express');
const { handleRPC } = require('../controllers/rpcController');

const router = express.Router();

router.post('/', handleRPC);

module.exports = router;
