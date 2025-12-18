import {Router} from "express";
import {getAllIngredients} from "../controllers/ingredient.controller.js";

const router = Router();
router.get("/", getAllIngredients);

export default router;