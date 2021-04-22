const { Variable } = require('../models');

const ctrl = {};

ctrl.createVariable = async (req, res) => {
    try {
        const { name, ecaStandar } = req.body;
        const variableSaved = await Variable.create({ name, ecaStandar });
        res.status(201).json(variableSaved);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while creating the Variable'
        });
    }
};

ctrl.getVariables = async (req, res) => {
    try {
        const variables = await Variable.findAll();
        res.status(200).json(variables);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while retrieving variables'
        });
    }
};

ctrl.getVariableById = async (req, res) => {
    try {
        const { id } = req.params;
        const variable = await Variable.findByPk(id);
        res.status(200).json(variable);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving Variable with id=${id}`
        });
    }
};

ctrl.updateVariableById = async (req, res) => {
    try {
        const { id } = req.params;
        const variableUpdated = await Variable.update(req.body, {
            where: { id }
        });
        if (variableUpdated == 1) {
            const variable = await Variable.findByPk(id);
            res.status(200).json(variable);
        } else {
            res.status(500).json({
                message: `Cannot update Variable with id=${id}. Maybe Variable was not found, req.body is empty or may be the same!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error updating Variable with id=${id}`
        });
    }
};

ctrl.deleteVariableById = async (req, res) => {
    try {
        const { id } = req.params;
        const variableDeleted = await Variable.destroy({
            where: { id }
        });
        if (variableDeleted == 1) {
            res.status(204).json();
        } else {
            res.status(500).json({
                message: `Cannot delete Variable with id=${id}. Maybe Variable was not found!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Could not delete Variable with id=${id}`
        });
    }
};

module.exports = ctrl;