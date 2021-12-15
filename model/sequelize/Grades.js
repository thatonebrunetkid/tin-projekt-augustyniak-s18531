const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Grades = sequelize.define('Grades', {
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    Grade:{
        type: Sequelize.DECIMAL(2,2),
        allowNull: false,
    },

    Date:{
        type: Sequelize.DATE,
        allowNull: false,
    },

    Comment: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },

    Subject_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
    },

    Student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
    },
});

module.exports = Grades;