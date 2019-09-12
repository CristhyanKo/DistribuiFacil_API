const Address = require("../models/Address");

class AddressController {
	async store(req, res) {
		const { personId, main } = req.body;
		if (await Address.findOne({ personId, main })) {
			return res.status(400).json({
				error: "There is already a registered address as main"
			});
		}

		return res.json(await this.create(req.body));
	}

	async create(data) {
		return await Address.create(data);
	}
}

module.exports = new AddressController();
