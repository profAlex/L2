import {Router} from "express";
// import {Request, Response} from "express";
// import {driversDb} from "../db/mock-data";
// import {Driver, DriverStatus} from "../drivers/driver-types";
// import {driverInputDtoValidation} from "../drivers/driver-body-validation";
// import {ValidationError} from "../core/validation-error";
// import {HttpStatus} from "../core/http-statuses";
import {createNewDriver, getDriverById, getDriversList} from "./router.descriptions";

export const driverRouter = Router();

driverRouter.get("/", getDriversList);
driverRouter.get("/:id", getDriverById);
driverRouter.post("/", createNewDriver);

