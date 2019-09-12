const Address = require("../models/Address");

class AddressController {
	async store(req, res) {
		return res.json(await this.create(req.body));
	}

	async create(data) {
		return await Address.create(data);
	}
}

module.exports = new AddressController();
