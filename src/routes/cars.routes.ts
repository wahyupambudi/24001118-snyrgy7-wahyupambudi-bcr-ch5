import {
    Router,
    Request,
    Response
} from "express";
const {
    handleListCars,
    handleCarsById,
    handleCreateCar,
    handlePutCar,
    handleDeleteCar
} = require("../handlers/cars.handler")

const router = Router();

// method Get
router.get("/", handleListCars)
router.get("/:id", handleCarsById)

export default router;