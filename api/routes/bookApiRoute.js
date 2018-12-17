'use strict';
module.exports = function (app) {
	var books = require('../controllers/bookApiController');
	/* Routing url with /books pattern */				
	app.route('/books')
		.get(books.get_all_books);
};