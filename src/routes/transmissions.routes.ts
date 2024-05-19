import { Router } from "express";
const {
    handleListTransmissions,
    handleTransmissionById,
    handleCreateTransmission,
    handlePutTransmission,
    handleDeleteTransmission
} = require("../handlers/transmissions.handler")

const router = Router();

// method Get
router.get("/", handleListTransmissions);
router.get("/:id", handleTransmissionById);
router.post("/add", handleCreateTransmission);
router.put("/update/:id", handlePutTransmission);
router.delete("/:id", handleDeleteTransmission);

export default router;