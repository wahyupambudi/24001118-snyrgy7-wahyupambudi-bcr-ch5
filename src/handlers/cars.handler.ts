import {Request, Response} from "express";
import { CarsModel } from "../models/CarsModel";


const handleListCars = async (_req: Request, res: Response) => {
    const cars = await CarsModel.query()
    res.status(200).json({
        message: "Success",
        cars
    })
}


module.exports = {
    handleListCars
}