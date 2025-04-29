"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const setupApp = (app) => {
    app.use(express_1.default.json());
    //app.use("/videos", videosRouter);
    //app.use("/testing", testingRouter);
    app.get("/", (req, res) => {
        res.status(200).send("Hello it_incubator! My second lesson!");
    });
    return app;
};
exports.setupApp = setupApp;
