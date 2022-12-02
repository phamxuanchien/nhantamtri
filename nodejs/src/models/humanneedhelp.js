'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Humanneedhelp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Humanneedhelp.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
            // Humanneedhelp.belongsTo(models.Allcode, { foreignKey: 'program', targetKey: 'keyMap', as: 'programData' })
            Humanneedhelp.belongsTo(models.Allcode, { foreignKey: 'stage', targetKey: 'keyMap', as: 'stageTypeData' })
            Humanneedhelp.belongsTo(models.Markdown, { foreignKey: 'Id' })
        }
    };
    Humanneedhelp.init({
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        purpose: DataTypes.STRING,
        program: DataTypes.STRING,
        cost: DataTypes.STRING,
        begin: DataTypes.STRING,
        operate: DataTypes.STRING,
        managename: DataTypes.STRING,
        manage: DataTypes.STRING,
        address: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        phonenumber: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        email: DataTypes.STRING,
        stage: DataTypes.STRING,
        count: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Humanneedhelp',
    });
    return Humanneedhelp;
};