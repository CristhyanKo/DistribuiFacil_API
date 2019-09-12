const Phone = require("../models/Phone");

class PhoneController {
	async store(req, res) {
		return res.json(await this.create(req.body));
	}

	async create(data) {
		return await Phone.create(data);
	}
}

module.exports = new PhoneController();
