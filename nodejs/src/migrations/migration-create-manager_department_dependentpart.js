'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('manager_department_branch', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            managerId: {
                type: Sequelize.INTEGER
            },
            departmentId: {
                type: Sequelize.INTEGER
            },
            groupId: {
                type: Sequelize.INTEGER
            },
            branchId: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('manager_department_branch');
    }
};