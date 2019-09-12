const mongoose = require("mongoose");

const Person = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cpf: {
		type: String,
		required: true,
		unique: true
	},
	birthday: {
		type: Date,
		required: true
	},
	addresses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "address",
			required: true
		}
	],
	phones: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "phone",
			required: true
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Person", Person);
