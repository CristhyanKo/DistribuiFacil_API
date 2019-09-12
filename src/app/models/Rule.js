const mongoose = require("mongoose");

const Rules = new mongoose.Schema({
	code: {
		type: Number,
		deault: 1,
		unique: true
	},
	description: {
		type: String,
		default: "User",
		unique: true,
		uppercase: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Rules", Rules);
