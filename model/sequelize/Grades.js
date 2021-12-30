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
                msg: "Field required"
            },
            isDecimal: {
                msg: "Only digits allowed"
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
                msg: "Field required"
            },
            isDate: {
                msg: "Wrong data format"
            },
        }

    },

    Comment: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: "Maximum 50 signs"
            },
        }

    },

    sub_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            not: 'Select option'
        }
    },

    std_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            not: 'Select option'
        }
    },
});

module.exports = Grades;