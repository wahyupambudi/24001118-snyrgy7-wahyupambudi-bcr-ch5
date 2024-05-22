import { getById, getCar } from "../repositories/carRepositories"

export const getAllCars = () => {
    return getCar();
}

export const getCarById = (id: number) => {
    return getById(id);
}