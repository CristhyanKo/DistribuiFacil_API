const Person = require("../models/Person");
const AddressController = require("../controllers/AddressController");
const PhoneController = require("../controllers/PhoneController");

class PersonController {
	async store(req, res) {
		const { cpf } = req.body;

		if (await Person.findOne({ cpf })) {
			return res.status(400).json({ error: "Person already exists" });
		}

		return res.json(await this.create(req.body));
	}

	async create(data) {
		const { address, phone } = data;

		const person = await Person.create(data);

		await AddressController.create({ ...address, personId: person._id });
		await PhoneController.create({ ...phone, personId: person._id });

		return person;
	}
}

module.exports = new PersonController();
