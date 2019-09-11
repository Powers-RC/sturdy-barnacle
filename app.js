const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');


// Set up the express app
const app = express();

//Middleware Options
//const options = {"target": 'http://localhost:8000', "secure": false, "changeOrigin": true, "logLevel": "debug"};

//Add Middleware for http proxying
//const apiProxy = proxy('/api*', options);
//app.use('/api', apiProxy);

//require env vars
require('dotenv-flow').config();
//TODO:Put in testing here to make sure the proper variables are being passed and available
//console.log("Verifying Variables Pulled In");
//console.log(process.env.HOST);
//console.log(process.env.DATABASE_URL);
//console.log(process.env.DIALECT);
//console.log(process.env.DATABASE);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

module.exports = app;