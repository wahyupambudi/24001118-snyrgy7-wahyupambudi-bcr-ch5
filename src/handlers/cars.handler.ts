import {Request, Response} from "express";
import { CarsModel } from "../models/CarsModel";
import carImg  from "../middleware/multer";
const cloudinary = require('../config/cloudinary.ts')


const handleListCars = async (_req: Request, res: Response) => {
    const cars = await CarsModel.query().orderBy('id');
    res.status(200).json({
        message: "Success",
        cars
    })
}

const handleCarsById = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);

    try {
        const car = await CarsModel.query().findById(Number(id)).throwIfNotFound();
        res.status(200).json({
            message: "Success",
            car
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}

const handleCreateCar = async (req: Request, res: Response) => {
    const {
        car_name,
        price,
        avaibility, 
        start_rent, 
        end_rent,
        img,
        transmission_id,
        brand_id,
        category_id,
    } = req.body;

    const fileBase64 = req.file?.buffer.toString("base64");
    const file = `data:${req.file?.mimetype};base64,${fileBase64}`;

    try {
        if (!req.file) {
            return res.status(400).json({message:'No Image Uploaded'});
        }
        
        // cloudinary
        const img = await cloudinary.uploader.upload(file, {
            folder: 'bcr-ch5',
            use_filename: true
        })

        const cars = await CarsModel.query().insert({
            car_name,
            price,
            avaibility,
            start_rent,
            end_rent,
            img:img.secure_url,
            transmission_id,
            brand_id,
            category_id,
            createdAt: new Date(),
            updatedAt: new Date()
        }as any);
        res.status(201).json({
            message: "Success",
            cars
        })
        return;
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
        return;
    }

}
const handlePutCar = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const getCar = await CarsModel.query().findById(Number(id));

    const {
        car_name,
        price,
        avaibility, 
        start_rent, 
        end_rent,
        img,
        transmission_id,
        brand_id,
        category_id,
        updatedAt,
    } = req.body;

    const fileBase64 = req.file?.buffer.toString("base64");
    const file = `data:${req.file?.mimetype};base64,${fileBase64}`;

    try {
        if (!req.file) {
            return res.status(400).json({message:'No Image Uploaded'});
        }

        if(getCar === undefined) {
            return res.status(404).json({message:'Data Not Found'});
        }
        
        // cloudinary
        const img = await cloudinary.uploader.upload(file, {
            folder: 'bcr-ch5',
            use_filename: true
        })

        await CarsModel.query().findById(Number(id)).throwIfNotFound().patch({
            car_name,
            price,
            avaibility,
            start_rent,
            end_rent,
            img:img.secure_url,
            transmission_id,
            brand_id,
            category_id,
            updatedAt: new Date()
        } as any);
        
        const cars = await CarsModel.query().findById(Number(id)).throwIfNotFound();

        res.status(200).json({
            message: "Success",
            cars
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}
const handleDeleteCar = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const cars = await CarsModel.query().findById(Number(id)).throwIfNotFound();
    // await cloudinary.uploader.destroy('bcr-ch5/kr2docjmwfy6ru2tdkcx')
    try {
        await CarsModel.query().deleteById(Number(id)).throwIfNotFound();
        const cars = await CarsModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            cars
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
    handleListCars,
    handleCarsById,
    handleCreateCar,
    handlePutCar,
    handleDeleteCar 
}