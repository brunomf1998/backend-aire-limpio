const { Router } = require('express');
const { zonesController } = require('../controllers');

const router = Router();

router.post('/', zonesController.createZone);
router.get('/', zonesController.getZones);
router.get('/:id', zonesController.getZoneById);
router.get('/district/:id', zonesController.getZonesByDistrict);
router.put('/:id', zonesController.updateZoneById);
router.delete('/:id', zonesController.deleteZoneById);

module.exports = router;