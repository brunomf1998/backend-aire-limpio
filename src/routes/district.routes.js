const { Router } = require('express');
const { districtsController } = require('../controllers');

const router = Router();

router.post('/', districtsController.createDistrict);
router.get('/', districtsController.getDistricts);
router.get('/:id', districtsController.getDistrictById);
router.put('/:id', districtsController.updateDistrictById);
router.delete('/:id', districtsController.deleteDistrictById);

module.exports = router;