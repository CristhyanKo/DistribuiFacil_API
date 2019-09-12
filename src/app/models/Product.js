const mongoose = require("mongoose");

const Product = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	code: {
		type: Number,
		required: true
	},
	Price: {
		type: mongoose.Schema.Types.Decimal128,
		required: true
	},
	expirationDate: {
		type: Date
	}
});

module.exports = mongoose.model("Product", Product);
