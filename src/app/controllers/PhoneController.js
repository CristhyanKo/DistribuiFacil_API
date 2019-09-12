const Phone = require("../models/Phone");

class PhoneController {
	async store(req, res) {
		const phone = await Phone.create(req.body);

		return res.json(phone);
	}
}

module.exports = new PhoneController();
