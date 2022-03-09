import {Router} from 'express';
import { createProduct, deleteProduct, getProducts, getProductsById, productsByCategory, updateProduct } from '../controllers/ProductController';

const router = Router();

// /api/products
router.get('/products', getProducts);
// /api/products/10
//router.get('/products/:id', getProductsById);

//router.get('/productsbycategory', productsByCategory);

//router.post('/products', createProduct);

// /api/products/10     -Update
//router.put('/products/:id', updateProduct);
// /api/products/10     -Delete
//router.delete('/products/:id', deleteProduct);

export default router;