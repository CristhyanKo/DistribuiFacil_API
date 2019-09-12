const User = require("../models/User");
const PersonController = require("../controllers/PersonController");

class UserController {
	async store(req, res) {
		const { email } = req.body;

		if (await User.findOne({ email })) {
			return res.status(400).json({ error: "User already exists" });
		}

		const person = await PersonController.create(req.body.person);
		const user = await User.create({ ...req.body, personId: person._id });

		return res.json(user);
	}
}

module.exports = new UserController();
