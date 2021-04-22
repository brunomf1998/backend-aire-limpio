const { Router } = require('express');
const { measurementsController } = require('../controllers');

const router = Router();

router.post('/', measurementsController.createMeasurement);
router.get('/', measurementsController.getMeasurements);
router.get('/:id', measurementsController.getMeasurementById);
router.put('/:id', measurementsController.updateMeasurementById);
router.delete('/:id', measurementsController.deleteMeasurementById);

module.exports = router;