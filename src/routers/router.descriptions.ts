import {Request, Response} from "express";
import {driversDb} from "../db/mock-data";
import {ValidationError} from "../core/validation-error";
import {driverInputDtoValidation} from "../drivers/driver-body-validation";
import {HttpStatus} from "../core/http-statuses";
import {Driver, DriverStatus} from "../drivers/driver-types";


export const getDriversList = (req: Request, res: Response) => {
    res.status(200).json(driversDb.drivers);
};

export const getDriverById = (req: Request, res: Response) => {
    const driver = driversDb.drivers.find((d) => d.id === +req.params.id);
    if(!driver) {
        res.status(404).send({ message: "Driver not found" });
        return;
    }

    res.status(200).send(driver);
};

export const createNewDriver = (req: Request, res: Response) => {
    const errors: ValidationError[] = driverInputDtoValidation(req.body);
    if(errors.length > 0) {
        res.status(HttpStatus.BadRequest).send({ errors: errors });
        return;
    }

    const newDriver: Driver = {
        ...req.body,
        id: driversDb.drivers.length ? driversDb.drivers[driversDb.drivers.length - 1].id + 1 : 1,
        status: DriverStatus.Online,
        createdAt: new Date(),
    };

    driversDb.drivers.push(newDriver);

    res.status(201).send(newDriver);
};