'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Humanneedhelps', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location: {
                type: Sequelize.STRING
            },
            purpose: {
                type: Sequelize.STRING
            },
            program: {
                type: Sequelize.STRING
            },
            cost: {
                type: Sequelize.STRING
            },
            begin: {
                type: Sequelize.STRING
            },
            operate: {
                type: Sequelize.STRING
            },
            managename: {
                type: Sequelize.STRING
            },
            manage: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            phonenumber: {
                type: Sequelize.STRING
            },
            descriptionHTML: {
                type: Sequelize.TEXT
            },
            descriptionMarkdown: {
                type: Sequelize.TEXT
            },
            image: {
                type: Sequelize.BLOB('long'),
            },
            email: {
                type: Sequelize.STRING
            },
            stage: {
                type: Sequelize.STRING
            },
            count: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Humanneedhelps');
    }
};