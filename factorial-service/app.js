const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const factorialRoutes = require('./src/routes/factorialRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', factorialRoutes);

module.exports = app;
