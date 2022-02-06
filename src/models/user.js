import { Sequelize } from "sequelize/dist";
import { connection } from "../database/connection";


export const userSchema = connection.define('users', {

    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {type: Sequelize.TEXT},
    lastname: {type: Sequelize.TEXT},
    identification: {type: Sequelize.TEXT},
    email: {type: Sequelize.TEXT},
    birthdate: {type: Sequelize.DATE},
})