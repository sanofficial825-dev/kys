import { Router } from "express";
import { getAllProducts, getProductById, getProducts } from "../controllers/product.controller.js";

const router = Router();

// router.get("/", getAllProducts);         // GET /api/products
router.get("/", getProducts); // GET /api/products?brandName=someBrand
router.get("/:id", getProductById);      // GET /api/products/:id

export default router;

