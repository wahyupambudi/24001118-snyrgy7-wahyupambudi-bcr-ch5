import {Router, Request, Response} from "express";


const router = Router();

// method Get
router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Get API"
    })
})

export default router;