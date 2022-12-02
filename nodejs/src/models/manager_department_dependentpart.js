'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manager_Department_Branch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Manager_Department_Branch.init({
        managerId: DataTypes.INTEGER,
        departmentId: DataTypes.INTEGER,
        branchId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER,
        projectneedhelpId: DataTypes.INTEGER,
        humanneedhelpId: DataTypes.INTEGER,
        newseventsId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Manager_Department_Branch',
    });
    return Manager_Department_Branch;
};