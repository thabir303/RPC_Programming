const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rpcRoutes = require('./src/routes/rpcRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/rpc', rpcRoutes);

module.exports = app;
