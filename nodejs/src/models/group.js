'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Group.init({
        groupName: DataTypes.STRING,
        groupCode: DataTypes.STRING,
        address: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        phonenumber: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        email: DataTypes.STRING,
        departmentName: DataTypes.STRING,
        groupId: DataTypes.STRING,
        groupManager: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Group',
    });
    return Group;
};