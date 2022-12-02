'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Markdown.belongsTo(models.User, { foreignKey: 'benefactorId' })
            Markdown.belongsTo(models.Humanneedhelp, { foreignKey: 'humanneedhelpId' })
            Markdown.belongsTo(models.Projectneedhelp, { foreignKey: 'projectneedhelpId' })

        }
    };
    Markdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        benefactorId: DataTypes.INTEGER,
        projectneedhelpId: DataTypes.INTEGER,
        humanneedhelpId: DataTypes.INTEGER,
        donateActivityId: DataTypes.INTEGER,
        surpriseProgramId: DataTypes.INTEGER,
        paymentId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
};