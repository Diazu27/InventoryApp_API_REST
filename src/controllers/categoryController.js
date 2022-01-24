import { categoriesSchema } from "../models/categories"



export const getCategories = async(req, res)=>{

    const categories = await categoriesSchema.findAll();

    res.json(categories);
}

export const getCategoriesById = async(req, res)=>{

    const {id} = req.params;

    const categories = await categoriesSchema.findOne({
        where: {id: id}
    });

    res.json(categories);
}


export const CreateCategory = async(req, res)=>{

    const {name} = req.body;
    
   try{
    const categories = await categoriesSchema.create(
        {name: name}
    );  

    if(categories){
        res.status(200).json({
            message: 'Category created successfully',
            data: categories
        });
    }

   }catch(e){
        res.status(404).send({
            message: `Error: ${e}`
        });
   }
}


export const DeleteCategory = async(req, res)=>{

    const {id} = req.params;

    try{
        const rowsDeleted = await categoriesSchema.destroy(
         {   where : {id: id}}
        );   
 
        if(rowsDeleted){
          res.status(200).json({
              message: 'Category deleted successfully',
              rowsDeleted: rowsDeleted
          });
        }
 
    }catch(e){
         res.status(404).send({
             message: `Error: ${e}`
         });
    }
}


export const updateCategory = async(req, res) =>{

    const {name} = req.body;
    const {id} = req.params;

    try{
        const rowsModified = await categoriesSchema.update({
            name: name,
        },
        {   where : {id: id}}
        );   
 
        if(rowsModified){
          res.status(200).json({
              message: 'Category updated successfully',
              rowsModified: rowsModified
          });
        }
 
    }catch(e){
         res.status(404).send({
             message: `Error: ${e}`
         });
    }
}