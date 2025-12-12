import { Router } from "express";
import { getAllProducts, getProductById, getProducts, getProducts2, getProductNamesByBrandName, getProductsByCategory } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts); // GET /api/products?brandName=someBrand
router.get("/productNames", getProductNamesByBrandName); // GET /api/products/names?brandName=someBrand

// router.get("/2", getProducts2); // GET /api/products?brandName=someBrand
// router.get("/getProductsByCategory", getProductsByCategory); // GET /api/products/names?brandName=someBrand
// router.get("/:id", getProductById);      // GET /api/products/:id
// router.get("/", getAllProducts);         // GET /api/products

export default router;
