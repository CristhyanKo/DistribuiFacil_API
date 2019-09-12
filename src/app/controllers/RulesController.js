const Rules = require("../models/Rules");

class RulesController {
	async store(req, res) {
		const { description } = req.body;
		if (await Rules.findOne({ description })) {
			return res.status(400).json({ error: "Rules already exists" });
		}
		const rules = await Rules.create(req.body);

		return res.json(rules);
	}
}

module.exports = new RulesController();
