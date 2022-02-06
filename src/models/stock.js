import { Sequelize } from "sequelize";
import { connection } from "../database/connection";
import { productSchema } from "./product";


export const stockSchema = connection.define('stock', {
    productid : { type: Sequelize.INTEGER, primaryKey: true},
    unitsinstock: {type: Sequelize.FLOAT },
    },
    {freezeTableName: true, }
);


stockSchema.belongsTo(productSchema, {foreignKey: 'productid'});
 