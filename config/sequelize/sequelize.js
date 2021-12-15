const Sequelize = require('sequelize');

const sequelize = new Sequelize('jam', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;