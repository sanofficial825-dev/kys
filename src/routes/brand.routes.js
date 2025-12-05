import {Router} from "express";
import {getAllBrands} from "../controllers/brand.controller.js";

const router = Router();
router.get("/", getAllBrands);

export default router;