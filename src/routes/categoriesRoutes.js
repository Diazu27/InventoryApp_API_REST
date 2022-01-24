import {Router} from 'express';
import { CreateCategory, DeleteCategory, getCategories, getCategoriesById, updateCategory } from '../controllers/categoryController';


const router = Router();


router.get('/', getCategories);
router.get('/:id', getCategoriesById);

router.post('/', CreateCategory);
router.delete('/:id', DeleteCategory);
router.put('/:id', updateCategory);

export default router;

