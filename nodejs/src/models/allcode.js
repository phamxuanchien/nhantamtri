'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' })
            Allcode.hasMany(models.Schedule, { foreignKey: 'timeType', as: 'timeTypeData' })

            // Allcode.hasMany(models.Manager, { foreignKey: 'priceId', as: 'priceTypeData' })
            // Allcode.hasMany(models.Manager, { foreignKey: 'paymentId', as: 'paymentTypeData' })
            // Allcode.hasMany(models.Manager, { foreignKey: 'provinceId', as: 'provinceTypeData' })

            Allcode.hasMany(models.Booking, { foreignKey: 'timeType', as: 'timeTypeDataPatient' })
            Allcode.hasMany(models.Projectneedhelp, { foreignKey: 'stage', as: 'stageData' })
            Allcode.hasMany(models.Humanneedhelp, { foreignKey: 'stage', as: 'stageTypeData' })

            Allcode.hasMany(models.Benefactor, { foreignKey: 'paymentId', as: 'paymentTypeData' })
            Allcode.hasMany(models.Benefactor, { foreignKey: 'donateActivityId', as: 'oactivityTypeData' })
            Allcode.hasMany(models.Submenu, { foreignKey: 'groupmenu', as: 'groupmenuTypeData' })
            Allcode.hasMany(models.Branch, { foreignKey: 'branchId', as: 'branchData' })
        }
    };
    Allcode.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};