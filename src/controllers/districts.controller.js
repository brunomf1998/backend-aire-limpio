const { District } = require('../models');

const ctrl = {};

ctrl.createDistrict = async (req, res) => {
    try {
        const { id, name } = req.body;
        const districtSaved = await District.create({ id, name });
        res.status(201).json(districtSaved);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while creating the District'
        });
    }
};

ctrl.getDistricts = async (req, res) => {
    try {
        const districts = await District.findAll();
        res.status(200).json(districts);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while retrieving districts'
        });
    }
};
  
ctrl.getDistrictById = async (req, res) => {
    try {
        const { id } = req.params;
        const district = await District.findByPk(id);
        res.status(200).json(district);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving District with id=${id}`
        });
    }
};

ctrl.updateDistrictById = async (req, res) => {
    try {
        const { id } = req.params;
        const districtUpdated = await District.update(req.body, {
            where: { id }
        });
        if (districtUpdated == 1) {
            const district = await District.findByPk(id);
            res.status(200).json(district);
        } else {
            res.status(500).json({
                message: `Cannot update District with id=${id}. Maybe District was not found, req.body is empty or may be the same!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error updating District with id=${id}`
        });
    }
};

ctrl.deleteDistrictById = async (req, res) => {
    try {
        const { id } = req.params;
        const districtDeleted = await District.destroy({
            where: { id }
        });
        if (districtDeleted == 1) {
            res.status(204).json();
        } else {
            res.status(500).json({
                message: `Cannot delete District with id=${id}. Maybe District was not found!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Could not delete District with id=${id}`
        });
    }
};

module.exports = ctrl;