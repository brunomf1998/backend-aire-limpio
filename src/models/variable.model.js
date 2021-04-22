const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Variable = sequelize.define('variables', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    ecaStandar: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Variable;