import {Router} from "express";
const {
    handleListCategories,
    handleCategorieById,
    handleCreateCategorie,
    handlePutCategorie,
    handleDeleteCategorie
} = require("../handlers/categories.handler")

const router = Router();

// method Get
router.get("/", handleListCategories);
router.get("/:id", handleCategorieById);
router.post("/add", handleCreateCategorie);
router.put("/update/:id", handlePutCategorie);
router.delete("/:id", handleDeleteCategorie);

export default router;