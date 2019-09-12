const express = require("express");
const mongoose = require("mongoose");
const controllers = require("./app/controllers");

const routes = express.Router();

routes.post("/users", controllers.UserController.store);
routes.post("/rules", controllers.RulesController.store);
routes.post("/persons", controllers.PersonController.store);

module.exports = routes;
