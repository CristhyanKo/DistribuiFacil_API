const mongoose = require("mongoose");

const Address = new mongoose.Schema({
	street: {
		type: String,
		required: true
	},
	district: {
		type: String,
		required: true
	},
	postalCode: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	number: {
		type: Number,
		required: true
	},
	main: {
		type: Boolean,
		defaut: true
	},
	personId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "person",
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Address", Address);
