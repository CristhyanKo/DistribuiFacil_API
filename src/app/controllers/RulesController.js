const Rules = require("../models/Rules");
const BaseController = require("./BaseController");

class RulesController extends BaseController {
	constructor(model) {
		super(model);
	}
	async store(req, res) {
		const { description } = req.body;
		if (await Rules.findOne({ description })) {
			return res.status(400).json({ error: "Rules already exists" });
		}

		return res.json(await this.create(req.body));
	}
}

module.exports = new RulesController(Rules);
