'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manager extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Manager.belongsTo(models.User, { foreignKey: 'managerId' });

            // Manager.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceTypeData' })
            // Manager.belongsTo(models.Allcode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentTypeData' })
            // Manager.belongsTo(models.Allcode, { foreignKey: 'provinceId', targetKey: 'keyMap', as: 'provinceTypeData' })

        }
    };
    Manager.init({
        managerId: DataTypes.INTEGER,
        branchId: DataTypes.INTEGER,
        departmentId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER,
        priceId: DataTypes.STRING,
        provinceId: DataTypes.STRING,
        paymentId: DataTypes.STRING,
        addressDepartment: DataTypes.STRING,
        nameDepartment: DataTypes.STRING,
        addressGroup: DataTypes.STRING,
        nameGroup: DataTypes.STRING,
        addressDependentpart: DataTypes.STRING,
        nameDependentpart: DataTypes.STRING,

        projectneedhelpId: DataTypes.INTEGER,
        addressProjectneedhelp: DataTypes.STRING,
        nameProjectneedhelp: DataTypes.STRING,
        humanneedhelpId: DataTypes.INTEGER,
        addressHumanneedhelp: DataTypes.STRING,
        nameHumanneedhelp: DataTypes.STRING,
        newseventsId: DataTypes.INTEGER,
        addressNewsevents: DataTypes.STRING,
        nameNewsevents: DataTypes.STRING,

        note: DataTypes.STRING,
        count: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Manager',
        freezeTableName: true
    });
    return Manager;
};