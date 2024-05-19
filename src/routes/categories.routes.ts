import {Router, Request, Response} from "express";
const {handleListCategories} = require("../handlers/categories.handler")

const router = Router();

// method Get
router.get("/", handleListCategories)

export default router;