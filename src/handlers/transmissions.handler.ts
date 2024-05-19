import {Request, Response} from "express";
import { TransmissionsModel } from "../models/TransmissionsModel"; 


const handleListTransmissions = async (_req: Request, res: Response) => {
    const transmissions = await TransmissionsModel.query()
    res.status(200).json({
        message: "Success",
        transmissions
    })
}


module.exports = {
    handleListTransmissions
}