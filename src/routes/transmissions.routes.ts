import {Router, Request, Response} from "express";
const {handleListTransmissions} = require("../handlers/transmissions.handler")

const router = Router();

// method Get
router.get("/", handleListTransmissions)

export default router;