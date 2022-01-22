import Sequelize from 'sequelize'
import {connection} from '../database/connection'
import { categoriesSchema } from './categories';


export const productSchema = connection.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
	name: {
    type: Sequelize.TEXT
  },
	categoryid: {
    type: Sequelize.INTEGER
  },
	unitmeasure: {
    type: Sequelize.TEXT
  },
	pricebyunit: {
    type: Sequelize.FLOAT
  },
});

/* 
 -En esta relacion digo que seleccione productos
 - Que una categoria tiene muchos productos y que tome el id como llave
 - Un producto pertenece a una categoria, y tomo la categoryid

*/
categoriesSchema.hasMany(productSchema, {foreignKey: 'id', sourceKey: 'id'});
productSchema.belongsTo(categoriesSchema, { foreignKey: 'categoryid', sourceKey: 'id'})
 