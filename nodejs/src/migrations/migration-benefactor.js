'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Benefactor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            benefactorId: {
                type: Sequelize.INTEGER,
            },
            donateActivityId: {
                type: Sequelize.INTEGER,
            },
            projectneedhelpId: {
                type: Sequelize.INTEGER
            },
            humanneedhelpId: {
                type: Sequelize.INTEGER
            },
            money: {
                type: Sequelize.INTEGER
            },
            nameDonateActivity: {
                type: Sequelize.STRING,
            },
            nameProjectneedhelp: {
                type: Sequelize.STRING,
            },
            nameHumanneedhelp: {
                type: Sequelize.STRING,
            },
            count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            paymentId: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Benefactor');
    }
};