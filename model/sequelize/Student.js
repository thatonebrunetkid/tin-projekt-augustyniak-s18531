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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1, 15],
                msg: "Maximum 15 signs"
            },
            is: /[A-Z][a-z]+/
        }
    },

    Surname: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1, 30],
                msg: "Maximum 30 signs"
            },
        }
    },

    Adress: {
      type: Sequelize.STRING(50),
      allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1, 50],
                msg: "Maximum 50 signs"
            },
        }
    },

    ZipCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1, 10],
                msg: "Maximum 10 signs"
            },
            is: /(\d{2}-\d{3})/,
        }
    },

    BirthDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            isDate: {
                msg: "Invalid date format"
            },

        }
    },

    PESEL: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [1, 11],
                msg: "Maximum 11 signs"
            },
            is: /(\d{11})/,
        }
    },

});

module.exports = Student;