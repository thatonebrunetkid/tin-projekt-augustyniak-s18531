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

    },

    ShortName:{
        type: Sequelize.STRING(3),
        allowNull: true,
    },

    Price:{
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
    },

    Opened:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },

    Lecturer:{
        type: Sequelize.STRING(30),
        allowNull: false,
    },
});

module.exports = Subject;