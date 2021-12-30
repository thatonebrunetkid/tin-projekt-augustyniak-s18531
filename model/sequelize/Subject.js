const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Subject = sequelize.define('Subject', {
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    Name:{
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1,10],
                msg: "Maximum 10 signs"
            },
        }

    },

    Shortname:{
        type: Sequelize.STRING(3),
        allowNull: true,
        validate: {
            len: {
                args: [0,3],
                msg: "Maximum 3 signs"
            },
        }
    },

    Price:{
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            isDecimal: {
                msg: "Only digit value"
            },
        }
    },

    Opened:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            not: 'Select option'
        }
    },

    Lecturer:{
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len:{
                args: [1,30],
                msg: "Maximum 30 signs"
            },
        }
    },
});

module.exports = Subject;