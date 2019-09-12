const Person = require("../models/Person");

class PersonController {
	async store(req, res) {
		const { cpf } = req.body;
		if (await Person.findOne({ cpf })) {
			return res.status(400).json({ error: "Person already exists" });
		}

		const person = await Person.create(req.body);

		return res.json(person);
	}
}

module.exports = new PersonController();
