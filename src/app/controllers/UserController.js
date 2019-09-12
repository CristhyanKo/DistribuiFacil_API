const User = require("../models/User");
const PersonController = require("../controllers/PersonController");

class UserController {
	async store(req, res) {
		const { email } = req.body;

		if (await User.findOne({ email })) {
			return res.status(400).json({ error: "User already exists" });
		}

		return res.json(await this.create(req.body));
	}

	async create(data) {
		const person = await PersonController.create(data.person);
		return await User.create({ ...data, personId: person._id });
	}
}

module.exports = new UserController();
