import express  from "express";
import { createProduct, getAll, getById, removeProduct, updateProduct } from "../controllers/product";

const router = express.Router();

router.post("/products", createProduct)
router.get("/products", getAll)
router.get("/products/:id", getById)
router.patch("/products/:id", updateProduct)
router.delete("/products/:id", removeProduct)

export default router;