const express = require("express");
const mongoose = require("mongoose");

const routes = express.Router();

const controllers = require("./app/controllers");

routes.post("/users", controllers.UserController.store);

routes.post("/rules", controllers.RulesController.store);

routes.post("/persons", controllers.PersonController.store);

module.exports = routes;
