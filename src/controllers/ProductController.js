import { categoriesSchema } from '../models/categories';
import { productSchema } from '../models/product';

export const getProducts= async (req, res)=>{
    const products = await productSchema.findAll({
        include: [categoriesSchema]
    });
    res.json(products);
}

export const getProductsById = async (req, res)=>{

    const {id} = req.params;
    console.log(id);

    const products = await productSchema.findAll({
        where: {id : id},
        include: [categoriesSchema]
    });
    
    res.json(products);
  
}