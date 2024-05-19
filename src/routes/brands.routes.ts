import {Router, Request, Response} from "express";
const {handleListBrands} = require("../handlers/brands.handler")

const router = Router();

// method Get
router.get("/", handleListBrands)

export default router;