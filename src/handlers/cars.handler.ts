import {Request, Response} from "express";
import { CarsModel } from "../models/CarsModel";


const handleListCars = async (_req: Request, res: Response) => {
    const cars = await CarsModel.query()
    res.status(200).json({
        message: "Success",
        cars
    })
}

const handleCarsById = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const car = await CarsModel.query().findById(Number(id)).throwIfNotFound();

    res.status(200).json({
        message: "Success",
        car
    })
}

const handleCreateCar = async (req: Request, res: Response) => {}
const handlePutCar = async (req: Request, res: Response) => {}
const handleDeleteCar = async (req: Request, res: Response) => {}

module.exports = {
    handleListCars,
    handleCarsById,
    handleCreateCar,
    handlePutCar,
    handleDeleteCar 
}