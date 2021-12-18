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
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            isDecimal: {
                msg: "Tylko liczby"
            },
            min: 1,
            max: 5,
        }
    },

    Date:{
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            isDate: {
                msg: "To nie data"
            },
        }

    },

    Comment: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len: {
                args: [1, 50],
                msg: "Pole moze zawierac max 50 znakow"
            },
        }

    },

    sub_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
    },

    std_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
    },
});

module.exports = Grades;