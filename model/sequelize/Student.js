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
                msg: "Pole wymagane"
            },
            len: {
                args: [1, 15],
                msg: "Pole moze zawierac max 15 znakow"
            },
        }
    },

    Surname: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len: {
                args: [1, 30],
                msg: "Pole moze zawierac max 30 znakow"
            },
        }
    },

    Adress: {
      type: Sequelize.STRING(50),
      allowNull: false,
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

    ZipCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len: {
                args: [1, 10],
                msg: "Pole moze zawierac max 10 znakow"
            },
            is: /(\d{2}-\d{3})/,
        }
    },

    BirthDate: {
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

    PESEL: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            len: {
                args: [1, 11],
                msg: "Pole moze zawierac max 11 znakow"
            },
            is: /(\d{11})/,

        }
    },

});

module.exports = Student;