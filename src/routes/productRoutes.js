import {Router} from 'express';
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from '../controllers/ProductController';

const router = Router();

// /api/products
router.get('/', getProducts);
// /api/products/10
router.get('/:id', getProductsById);

router.post('/', createProduct);

// /api/products/10     -Update
router.put('/:id', updateProduct);
// /api/products/10     -Delete
router.delete('/:id', deleteProduct);

export default router;