const Address = require("../models/Address");

class AddressController {
	async store(req, res) {
		const address = await Address.create(req.body);
		return res.json(address);
	}
}

module.exports = new AddressController();
