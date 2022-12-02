'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Projectneedhelp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Projectneedhelp.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
            // Projectneedhelp.belongsTo(models.Allcode, { foreignKey: 'program', targetKey: 'keyMap', as: 'programData' })
            Projectneedhelp.belongsTo(models.Allcode, { foreignKey: 'stage', targetKey: 'keyMap', as: 'stageData' })
            Projectneedhelp.belongsTo(models.Markdown, { foreignKey: 'Id' })
        }
    };
    Projectneedhelp.init({
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
        modelName: 'Projectneedhelp',
    });
    return Projectneedhelp;
};