import Sequelize from 'sequelize';
import {connection} from '../database/connection';


export const categoriesSchema = connection.define('categories', {
    id : { 
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: { type: Sequelize.TEXT}
})


