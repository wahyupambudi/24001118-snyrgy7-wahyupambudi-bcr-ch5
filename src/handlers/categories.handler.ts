import {Request, Response} from "express";
import { CategoriesModel } from "../models/CategoriesModel";


const handleListCategories = async (_req: Request, res: Response) => {
    const categories = await CategoriesModel.query()
    res.status(200).json({
        message: "Success",
        categories
    })
}

const handleCategorieById = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        const categorie = await CategoriesModel.query().findById(Number(id)).throwIfNotFound();

        res.status(200).json({
            message: "Success",
            categorie
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}

const handleCreateCategorie = async (req: Request, res: Response) => {
    const getBody = req.body;
    try {
        const categorie = await CategoriesModel.query().insert(getBody);
        res.status(201).json({
            message: "Success",
            categorie
        })
        return;
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: "Data Is Not Null!"
        })
        return;
    }
}

const handlePutCategorie = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const getBody = req.body;
    try {
        await CategoriesModel.query().findById(Number(id)).throwIfNotFound().patch(getBody)
        const categories = await CategoriesModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            categories
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}
const handleDeleteCategorie = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        await CategoriesModel.query().deleteById(Number(id)).throwIfNotFound();
        const categories = await CategoriesModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            categories
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}

module.exports = {
    handleListCategories,
    handleCategorieById,
    handleCreateCategorie,
    handlePutCategorie,
    handleDeleteCategorie
}