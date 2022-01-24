import Sequelize from 'sequelize';
import {connection} from '../database/connection';


export const categoriesSchema = connection.define('categories', {
    id : { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { type: Sequelize.TEXT}
})


