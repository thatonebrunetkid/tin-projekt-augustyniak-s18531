const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Student = sequelize.define('Student', {
    _id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    Name: {
        type: Sequelize.STRING(15),
        allowNull: false
    },

    Surname: {
        type: Sequelize.STRING(30),
        allowNull: false
    },

    Adress: {
      type: Sequelize.STRING(50),
      allowNull: false
    },

    ZipCode: {
        type: Sequelize.STRING(10),
        allowNull: false
    },

    BirthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    PESEL: {
        type: Sequelize.STRING(11),
        allowNull: false
    },

});

module.exports = Student;