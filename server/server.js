/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

// set up ======================================================================
const express = require('express');
const app = express(); 						// create our app w/ express
const mongoose = require('mongoose'); 				// mongoose for mongodb
const port = process.env.PORT || 8080; 				// set the port
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// configuration ===============================================================
mongoose.connect(process.env.MONGODB_URI); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log('App listening on port ' + port);
