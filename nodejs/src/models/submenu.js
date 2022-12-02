'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Submenu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Submenu.belongsTo(models.Allcode, { foreignKey: 'groupmenu', targetKey: 'keyMap', as: 'groupmenuTypeData' })
        }
    };
    Submenu.init({
        name: DataTypes.STRING,
        groupmenu: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        image: DataTypes.BLOB('long'),
    }, {
        sequelize,
        modelName: 'Submenu',
    });
    return Submenu;
};