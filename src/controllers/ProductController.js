import { categoriesSchema } from '../models/categories';
import { productSchema } from '../models/product';
import Sequelize from 'sequelize';
import { connection } from '../database/connection';
import { stockSchema } from '../models/stock';


export const getProducts= async (req, res)=>{
    const products = await productSchema.findAll({
        include: [categoriesSchema]
    });
    res.json(products);
}

export const getProductsById = async (req, res)=>{

    const {id} = req.params;
    console.log(id);

    const products = await productSchema.findOne({
        where: {id : id},
        include: [categoriesSchema]
    });
    
    res.json(products);
  
}

export const createProduct = async (req, res)=>{

    const {name, categoryid, unitmeasure, pricebyunit} = req.body;

   try{
    const product = await productSchema.create({
        name: name,
        categoryid: categoryid,
        unitmeasure : unitmeasure,
        pricebyunit: pricebyunit
    });   

    if(product){

        const stockCreated = stockSchema.create({
            productid: product.id,
            unitsinstock: 0,
        })

        if(stockCreated){
            res.status(200).json({
                message: 'Product created successfuly',
                data: product
            });
        }

    
    }

   }catch(e){
        res.status(404).send({
            message: `Error: ${e}`
        });
   }
}

export const updateProduct  = async (req, res)=>{
    const {name, categoryid, unitmeasure, pricebyunit} = req.body;
    const {id} = req.params;

    try{
        const rowsModified = await productSchema.update({
            name: name,
            categoryid: categoryid,
            unitmeasure : unitmeasure,
            pricebyunit: pricebyunit
        },
        {   where : {id: id}}
        );   
 
        if(rowsModified){
          res.status(200).json({
              message: 'Product updated successfully',
              rowsModified: rowsModified
          });
        }
 
    }catch(e){
         res.status(404).send({
             message: `Error: ${e}`
         });
    }
}

export const deleteProduct  = async (req, res)=>{
    const {id} = req.params;
    try{
        const rowsDeleted = await productSchema.destroy(
         {   where : {id: id}}
        );   
 
        if(rowsDeleted){
          res.status(200).json({
              message: 'Product deleted successfully',
              rowsDeleted: rowsDeleted
          });
        }
 
    }catch(e){
         res.status(404).send({
             message: `Error: ${e}`
         });
    }
}


export const productsByCategory = async (req, res)=>{
    const query = 'SELECT c.name, count(*) FROM public.products as p INNER JOIN public.categories as c ON P.categoryid = c.id GROUP BY c.name;'
    const products = await connection.query(query, {nest: true})

    res.json(products);
}