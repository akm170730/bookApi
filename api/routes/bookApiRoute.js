'use strict';
module.exports = function (app) {
	var books = require('../controllers/bookApiController');

	app.route('/books')
		.get(books.get_all_books);
};