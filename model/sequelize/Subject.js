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
                msg: "Pole wmagane"
            },
            len: {
                args: [1,10],
                masg: "Pole moze zawierac max 10 zankow"
            },
        }

    },

    ShortName:{
        type: Sequelize.STRING(3),
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len: {
                args: [1,3],
                msg: "Pole moze zawierac max 3 znaki"
            },
        }
    },

    Price:{
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            isDecimal: {
                msg: "Tylko wartosci liczbowe"
            },
        }
    },

    Opened:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
        }
    },

    Lecturer:{
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len:{
                args: [1,30],
                msg: "Pole moze zawierac max 30 znakow"
            },
        }
    },
});

module.exports = Subject;