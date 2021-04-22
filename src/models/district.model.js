const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const District = sequelize.define('districts', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = District;