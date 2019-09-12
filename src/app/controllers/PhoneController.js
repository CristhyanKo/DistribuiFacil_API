const Phone = require("../models/Phone");
const BaseController = require("./BaseController");

class PhoneController extends BaseController {
	constructor(model) {
		super(model);
	}

	async store(req, res) {
		const { personId, main } = req.body;
		if (await Phone.findOne({ personId, main })) {
			return res.status(400).json({
				error: "There is already a registered phone as main"
			});
		}

		return res.json(await this.create(req.body));
	}
}

module.exports = new PhoneController(Phone);
