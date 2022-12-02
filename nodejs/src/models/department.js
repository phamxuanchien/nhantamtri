'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Department extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Department.init({
        departmentName: DataTypes.STRING,
        departmentCode: DataTypes.STRING,
        address: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        phonenumber: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        email: DataTypes.STRING,
        branchName: DataTypes.STRING,
        departmentId: DataTypes.STRING,
        departmentManager: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Department',
    });
    return Department;
};