'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	url: {
		type: String,
		required: 'default message'
	},
	title: {
		type: String,
		required: 'default message'
	},
	author: {
		type: String,
		required: 'default message'
	},
	price: {
		type: Number,
		required: 'default message'
	},
	availability: {
		type: Boolean,
		required: 'default message'
	},	
});

/* Export the schema as model*/
module.exports = mongoose.model('Book', BookSchema);