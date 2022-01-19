import Sequelize from 'sequelize'

export const connection = new Sequelize('Inventory_DB', 'postgres', 'Diazu2001', {
    host: 'localhost',
    dialect:'postgres',
    define: {
        timestamps: false,
    },
    logging: false
});

export const TryConn = async()=>{

    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
