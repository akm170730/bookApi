'use strict';

var mongoose = require('mongoose'),
	Book = mongoose.model('Book');

exports.get_all_books = function(req, res) {	
	var col = req.query.col ? req.query.col : 'title';
	var order = req.query.order ? req.query.order : 'ASC'; 
	if(order == 'DESC')
		col = "-" + col;
	Book.find({}).sort(col).exec(function(err, book) {
		if(err)
			res.send(err);
		res.json(book);						
	});
};
