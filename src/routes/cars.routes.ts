import { Router, Request, Response } from "express";
import carImg from "../middleware/multer";
const {
    handleListCars,
    handleCarsById,
    handleCreateCar,
    handlePutCar,
    handleDeleteCar
} = require("../handlers/cars.handler");

const router = Router();

// /v1/cars -> controller/handler -> models -> views
// method Get
router.get("/", handleListCars)
router.get("/:id", handleCarsById)
router.post("/add", carImg.single('img'), handleCreateCar);
router.put("/update/:id", carImg.single('img'), handlePutCar);
router.delete("/:id", handleDeleteCar);

export default router;