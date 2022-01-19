import {Router} from 'express';
import { TryConn } from '../database/connection';
import { productSchema } from '../models/product';

const router = Router();

// /api/products

router.get('/', async(req, res)=>{
    const products = await productSchema.findAll({
        attributes: ['Id', 'Name']
    });
    res.send(JSON.stringify(products));
})



export default router;