/* Get an instance of express application and setup of required modules */

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Book = require('./api/models/bookApiModel'),
	bodyParser = require('body-parser');

/* Set promise for the mongoose*/
mongoose.Promise = global.Promise;
/* Database connection*/
mongoose.connect('mongodb://localhost/Bookdb');

/* Will be executed for each and every incoming request*/
app.use(bodyParser.urlencoded({extened: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/bookApiRoute');
routes(app);

app.listen(port);
