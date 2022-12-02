'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Benefactor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Benefactor.belongsTo(models.User, { foreignKey: 'benefactorId' });


            Benefactor.belongsTo(models.Allcode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentTypeData' })
            Benefactor.belongsTo(models.Allcode, { foreignKey: 'donateActivityId', targetKey: 'keyMap', as: 'oactivityTypeData' })

        }
    };
    Benefactor.init({
        benefactorId: DataTypes.INTEGER,
        projectneedhelpId: DataTypes.INTEGER,
        nameProjectneedhelp: DataTypes.STRING,
        humanneedhelpId: DataTypes.INTEGER,
        nameHumanneedhelp: DataTypes.STRING,
        count: DataTypes.INTEGER,
        donateActivityId: DataTypes.INTEGER,
        nameDonateActivity: DataTypes.STRING,
        money: DataTypes.STRING,
        paymentId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Benefactor',
        freezeTableName: true
    });
    return Benefactor;
};