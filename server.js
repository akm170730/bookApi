var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Book = require('./api/models/bookApiModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Bookdb');

app.use(bodyParser.urlencoded({extened: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/bookApiRoute');
routes(app);

app.listen(port);

// console.log("Server is started");