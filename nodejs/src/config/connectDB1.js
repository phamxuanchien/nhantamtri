const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('u3vtag6w_nhantamtri', 'u3vtag6w_chiennhantamtri', 'Chien2481983@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = connectDB;