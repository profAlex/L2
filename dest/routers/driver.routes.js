"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const express_1 = require("express");
const router_descriptions_1 = require("./router.descriptions");
exports.driverRouter = (0, express_1.Router)();
exports.driverRouter.get("/", router_descriptions_1.getDriversList);
exports.driverRouter.get('/:id', router_descriptions_1.getDriverById);
exports.driverRouter.post('/', router_descriptions_1.createNewDriver);
