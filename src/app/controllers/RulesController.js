const Rules = require("../models/Rules");

class RulesController {
	async store(req, res) {
		const { description } = req.body;
		if (await Rules.findOne({ description })) {
			return res.status(400).json({ error: "Rules already exists" });
		}

		return res.json(await this.create(req.body));
	}

	async create(data) {
		return await Rules.create(data);
	}
}

module.exports = new RulesController();
