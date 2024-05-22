import { CarsModel } from "../models/CarsModel";

export const getCar = () => {
    return CarsModel.query();
}

export const getById = (id: number) => {
    return CarsModel.query().findById(Number(id)).throwIfNotFound();
}