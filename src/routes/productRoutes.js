import {Router} from 'express';
import { getProducts, getProductsById } from '../controllers/ProductController';


const router = Router();

// /api/products
router.get('/', getProducts);

// /api/products/10

router.get('/:id', getProductsById);



export default router;