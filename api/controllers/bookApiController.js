'use strict';

var mongoose = require('mongoose'),
	Book = mongoose.model('Book');
/* expose this method to other files.*/
exports.get_all_books = function(req, res) {	
	var col = req.query.col ? req.query.col : 'title'; 		// To check if the parameters are present 
	var order = req.query.order ? req.query.order : 'ASC'; 	// or not and provide default values if not.
	/* To decide whether to sort in ascending or descending order*/
	if(order == 'DESC')
		col = "-" + col;
	Book.find({}).sort(col).exec(function(err, book) {
		if(err)
			res.send(err);
		res.json(book);						
	});
};
