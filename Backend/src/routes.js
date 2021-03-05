const express = require("express");
const CalculatorController = require("./controllers/CalculatorController");
const routes = express.Router();

const calculatorController = new CalculatorController();

routes.post("/api/add", calculatorController.add);
routes.post("/api/subtract", calculatorController.subtract);
routes.post("/api/divide", calculatorController.divide);
routes.post("/api/multiply", calculatorController.multiply);
routes.post("/api/module", calculatorController.module);

module.exports = routes;
