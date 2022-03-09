import { productSchema } from "../models/product";
import { stockSchema } from "../models/stock"

export const getStock = async(req, res) => {
    
    res.json({mess: 'holaaa'});
}

export const getStockById = async (req, res)=>{

    const {id} = req.params;
    console.log(id);

    const products = await stockSchema.findOne({
        where: {productid : id},
        include: [productSchema]
    });
    
    res.json(products);
  
}

export const createStock = async (req, res)=>{

    const {productid, unitsinstock} = req.body;

   try{
    const stock = await stockSchema.create({
        productid: productid,
        unitsinstock: unitsinstock,
    });   

    if(stock){
        res.status(200).json({
            message: 'Stock created successfuly',
            data: stock
        });
    }

   }catch(e){
        res.status(404).send({
            message: `Error: ${e}`
        });
   }
}

export const updateStock  = async (req, res)=>{
    const {productid, unitsinstock} = req.body;
    const {id} = req.params;

    try{
        const rowsModified = await stockSchema.update({
            productid: productid,
            unitsinstock: unitsinstock,
        },
        {   where : {productid: id}}
        );   
 
        if(rowsModified){
          res.status(200).json({
              message: 'Stock updated successfully',
              rowsModified: rowsModified
          });
        }
 
    }catch(e){
         res.status(404).send({
             message: `Error: ${e}`
         });
    }
}

