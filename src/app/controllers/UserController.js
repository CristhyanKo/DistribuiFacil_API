const User = require("../models/User");
const Phone = require("../models/Phone");
const Address = require("../models/Address");

class UserController {
	async store(req, res) {
		const { email } = req.body;

		if (await User.findOne({ email })) {
			return res.status(400).json({ error: "User already exists" });
		}

		const { _id: idAddress } = await Address.create(req.body.address);
		const { _id: idPhone } = await Phone.create(req.body.phone);

		const user = await User.create({
			...req.body,
			addresses: [idAddress],
			phones: [idPhone]
		});

		return res.json(user);
	}
}

module.exports = new UserController();
