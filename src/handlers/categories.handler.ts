import {Request, Response} from "express";
import { CategoriesModel } from "../models/CategoriesModel";


const handleListCategories = async (_req: Request, res: Response) => {
    const categories = await CategoriesModel.query()
    res.status(200).json({
        message: "Success",
        categories
    })
}


module.exports = {
    handleListCategories
}