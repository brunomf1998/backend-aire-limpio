const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Variable = require('./variable.model');
const Zone = require('./zone.model');

const Measurement = sequelize.define('measurements', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    zoneId: {
        type: DataTypes.BIGINT,
    },
    variableId: {
        type: Sequelize.DataTypes.BIGINT,
    },
    ecaValue: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Measurement.belongsTo(Zone, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Measurement.belongsTo(Variable, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = Measurement;