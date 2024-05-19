import {Router, Request, Response} from "express";
const {handleListCars} = require("../handlers/cars.handler")

const router = Router();

// method Get
router.get("/", handleListCars)

export default router;