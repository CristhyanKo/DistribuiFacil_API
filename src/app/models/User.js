const mongoose = require("mongoose");

const User = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	personId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person",
		required: true
	},
	rules: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Rules",
		required: true,
		default: 1
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("User", User);
