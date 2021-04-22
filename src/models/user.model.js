const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const District = require('./district.model');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
});

User.belongsTo(District, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = User;