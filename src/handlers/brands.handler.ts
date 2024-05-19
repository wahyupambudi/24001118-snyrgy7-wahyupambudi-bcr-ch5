import {Request, Response} from "express";
import { BrandsModel } from "../models/BrandsModel";


const handleListBrands = async (_req: Request, res: Response) => {
    const brands = await BrandsModel.query()
    res.status(200).json({
        message: "Success",
        brands
    })
}


module.exports = {
    handleListBrands
}