const Rules = require("../models/Rules");

const rules = [
	{
		code: 1,
		description: "Administrador"
	},
	{
		code: 2,
		description: "Funcionario"
	},
	{
		code: 3,
		description: "Cliente"
	}
];

function seed() {
	rules.forEach(async rule => {
		await Rules.findOneAndUpdate({ code: rule.code }, rule, {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
		});
	});
}

module.exports = seed();
