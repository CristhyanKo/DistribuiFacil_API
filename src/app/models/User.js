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
	ruleCode: {
		type: Number,
		ref: "Rules.code",
		required: true,
		default: 3
		// 1 - Administrador
		// 2 - Funcionario
		// 3 - Cliente
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("User", User);
