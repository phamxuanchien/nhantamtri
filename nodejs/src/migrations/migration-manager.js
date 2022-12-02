'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Manager', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            managerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            branchId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            departmentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            groupId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            projectneedhelpId: {
                type: Sequelize.INTEGER
            },
            humanneedhelpId: {
                type: Sequelize.INTEGER
            },
            newseventsId: {
                type: Sequelize.INTEGER
            },
            priceId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            provinceId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressDepartment: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameDepartment: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressGroup: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameGroup: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressDependentpart: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameDependentpart: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressProjectneedhelp: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameProjectneedhelp: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressHumanneedhelp: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameHumanneedhelp: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            addressNewsevents: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameNewsevents: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            note: {
                type: Sequelize.STRING
            },
            count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Manager');
    }
};