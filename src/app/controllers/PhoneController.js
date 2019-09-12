const Phone = require("../models/Phone");

class PhoneController {
	async store(req, res) {
		const { personId, main } = req.body;
		if (await Phone.findOne({ personId, main })) {
			return res.status(400).json({
				error: "There is already a registered phone as main"
			});
		}

		return res.json(await this.create(req.body));
	}

	async create(data) {
		return await Phone.create(data);
	}
}

module.exports = new PhoneController();
