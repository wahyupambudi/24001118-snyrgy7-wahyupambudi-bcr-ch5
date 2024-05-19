import {Request, Response} from "express";
import { BrandsModel } from "../models/BrandsModel";


const handleListBrands = async (_req: Request, res: Response) => {
    const brands = await BrandsModel.query()
    res.status(200).json({
        message: "Success",
        brands
    })
}

const handleBrandById = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        const brand = await BrandsModel.query().findById(Number(id)).throwIfNotFound();

        res.status(200).json({
            message: "Success",
            brand
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}

const handleCreateBrand = async (req: Request, res: Response) => {
    const getBody = req.body;
    try {
        const brand = await BrandsModel.query().insert(getBody);
        res.status(201).json({
            message: "Success",
            brand
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

const handlePutBrand = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const getBody = req.body;
    try {
        await BrandsModel.query().findById(Number(id)).throwIfNotFound().patch(getBody)
        const brands = await BrandsModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            brands
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}
const handleDeleteBrand = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        await BrandsModel.query().deleteById(Number(id)).throwIfNotFound();
        const brands = await BrandsModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            brands
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
    handleListBrands,
    handleBrandById,
    handleCreateBrand,
    handlePutBrand,
    handleDeleteBrand
}