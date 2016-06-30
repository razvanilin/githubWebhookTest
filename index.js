var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var cors = require('cors');

// Create the application
var app = express();

// Add Middleware necessary for REST API's
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(cors());


// Load the routes
var routes = require('./routes');


_.each(routes, function(controller, route) {
	app.use(route, controller(app, route));
});



console.log('Listening on port 3333');
app.listen(3333);
