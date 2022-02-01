import { Router } from "express";
import { createStock, getStock, getStockById, updateStock } from "../controllers/stockController";

const router = Router();

router.get('/', getStock);
router.get('/:id', getStockById);
router.post('/', createStock);
router.put('/:id', updateStock);

export default router;