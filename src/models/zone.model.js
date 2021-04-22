const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const District = require('./district.model');

const Zone = sequelize.define('zones', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    coordX: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    coordY: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false
});

Zone.belongsTo(District, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = Zone;