const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");
const seeds = require("./app/seeds");

class App {
	constructor() {
		this.express = express();
		this.isDev = process.env.NODE_ENV !== "production";

		this.database();
		this.middlewares();
		this.routes();
		this.seeds();
	}

	database() {
		mongoose.connect(databaseConfig.uri, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
	}

	middlewares() {
		this.express.use(express.json());
	}

	routes() {
		this.express.use(require("./routes"));
	}

	seeds() {
		seeds.Rules;
	}
}

module.exports = new App().express;
