const mongoose = require("mongoose");

const Phone = new mongoose.Schema({
	number: {
		type: Number,
		required: true
	},
	ddd: {
		type: Number,
		required: true
	},
	main: {
		type: Boolean,
		default: true
	},
	personId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person",
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Phone", Phone);
