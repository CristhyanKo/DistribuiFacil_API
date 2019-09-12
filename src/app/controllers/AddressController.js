const Address = require("../models/Address");
const BaseController = require("./BaseController");

class AddressController extends BaseController {
	constructor(model) {
		super(model);
	}

	async store(req, res) {
		const { personId, main } = req.body;
		if (await Address.findOne({ personId, main })) {
			return res.status(400).json({
				error: "There is already a registered address as main"
			});
		}

		return res.json(await this.create(req.body));
	}
}

module.exports = new AddressController(Address);
