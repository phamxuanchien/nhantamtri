'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('markdowns', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contentHTML: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            contentMarkdown: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT('long')
            },
            benefactorId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            projectneedhelpId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            humanneedhelpId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            donateActivityId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            surpriseProgramId: {
                allowNull: true,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('markdowns');
    }
};