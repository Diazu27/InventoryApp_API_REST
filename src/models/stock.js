import { Sequelize } from "sequelize";
import { connection } from "../database/connection";
import { productSchema } from "./product";


export const stockSchema = connection.define('stock', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productid : { type: Sequelize.INTEGER},
    unitsinstock: {type: Sequelize.FLOAT }
    },
    {freezeTableName: true,}
);


productSchema.hasMany(stockSchema, {foreignKey: 'productid', sourceKey: 'id'});
stockSchema.belongsTo(productSchema, {foreignKey: 'id', sourceKey: 'id'});
