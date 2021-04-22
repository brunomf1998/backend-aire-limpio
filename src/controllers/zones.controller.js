const { Zone } = require('../models');

const ctrl = {};

ctrl.createZone = async (req, res) => {
    try {
        const { name, coordX, coordY, districtId } = req.body;
        const zoneSaved = await Zone.create({ name, coordX, coordY, districtId });
        res.status(201).json(zoneSaved);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while creating the Zone'
        });
    }
};

ctrl.getZones = async (req, res) => {
    try {
        const zones = await Zone.findAll();
        res.status(200).json(zones);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || 'Some error occurred while retrieving zones'
        });
    }
};

ctrl.getZoneById = async (req, res) => {
    try {
        const { id } = req.params;
        const zone = await Zone.findByPk(id);
        res.status(200).json(zone);
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error retrieving Zone with id=${id}`
        });
    }
};

ctrl.updateZoneById = async (req, res) => {
    try {
        const { id } = req.params;
        const zoneUpdated = await Zone.update(req.body, {
            where: { id }
        });
        if (zoneUpdated == 1) {
            const zone = await Zone.findByPk(id);
            res.status(200).json(zone);
        } else {
            res.status(500).json({
                message: `Cannot update Zone with id=${id}. Maybe Zone was not found, req.body is empty or may be the same!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Error updating Zone with id=${id}`
        });
    }
};


ctrl.deleteZoneById = async (req, res) => {
    try {
        const { id } = req.params;
        const zoneDeleted = await Zone.destroy({
            where: { id }
        });
        if (zoneDeleted == 1) {
            res.status(204).json();
        } else {
            res.status(500).json({
                message: `Cannot delete Zone with id=${id}. Maybe Zone was not found!`
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                error.message || `Could not delete Zone with id=${id}`
        });
    }
};

module.exports = ctrl;