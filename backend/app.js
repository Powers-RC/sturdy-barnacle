const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


// Set up the express app
const app = express();

//require env vars
require('dotenv').config()

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;