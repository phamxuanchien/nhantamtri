'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Branch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Branch.belongsTo(models.Allcode, { foreignKey: 'branchId', targetKey: 'keyMap', as: 'branchData' })
        }
    };
    Branch.init({
        branchName: DataTypes.STRING,
        branchCode: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        image: DataTypes.BLOB('long'),
        phonenumber: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        branchId: DataTypes.STRING,
        branchManager: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Branch',
    });
    return Branch;
};