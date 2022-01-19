import Sequelize from 'sequelize'
import {connection} from '../database/connection'


export const productSchema = connection.define('products', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  Name: {
    type: Sequelize.TEXT
  }
});