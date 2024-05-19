import {
    Request,
    Response
} from "express";
import {
    TransmissionsModel
} from "../models/TransmissionsModel";


const handleListTransmissions = async (_req: Request, res: Response) => {
    const transmissions = await TransmissionsModel.query().orderBy('id');
    res.status(200).json({
        message: "Success",
        transmissions
    })
    return;
}

const handleTransmissionById = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        const transmission = await TransmissionsModel.query().findById(Number(id)).throwIfNotFound();

        res.status(200).json({
            message: "Success",
            transmission
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}

const handleCreateTransmission = async (req: Request, res: Response) => {
    const getBody = req.body;
    try {
        const transmission = await TransmissionsModel.query().insert(getBody);
        res.status(201).json({
            message: "Success",
            transmission
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

const handlePutTransmission = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const getBody = req.body;
    try {
        await TransmissionsModel.query().findById(Number(id)).throwIfNotFound().patch(getBody)
        const transmissions = await TransmissionsModel.query().findById(Number(id)).throwIfNotFound();
        res.status(200).json({
            message: "Success",
            transmissions
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: `${err}`
        })
        return;
    }
}
const handleDeleteTransmission = async (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    try {
        await TransmissionsModel.query().deleteById(Number(id)).throwIfNotFound();
        const transmissions = await TransmissionsModel.query().orderBy('id');
        res.status(200).json({
            message: "Success",
            transmissions
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
    handleListTransmissions,
    handleTransmissionById,
    handleCreateTransmission,
    handlePutTransmission,
    handleDeleteTransmission
}