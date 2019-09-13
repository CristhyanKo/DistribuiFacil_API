const mongoose = require("mongoose");

const Contract = new mongoose.Schema({
	startDate: {
		type: Date,
		default: Date.now
	},
	endDate: {
		type: Date
	},
	Salary: {
		type: mongoose.Schema.Types.Decimal128,
		required: true
	},
	roleId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Role",
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Contract", Contract);
