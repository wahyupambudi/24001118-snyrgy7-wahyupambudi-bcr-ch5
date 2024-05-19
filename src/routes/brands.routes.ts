import {Router} from "express";
const {
    handleListBrands,
    handleBrandById,
    handleCreateBrand,
    handlePutBrand,
    handleDeleteBrand
} = require("../handlers/brands.handler")

const router = Router();

// method Get
router.get("/", handleListBrands);
router.get("/:id", handleBrandById);
router.post("/add", handleCreateBrand);
router.put("/update/:id", handlePutBrand);
router.delete("/:id", handleDeleteBrand);

export default router;