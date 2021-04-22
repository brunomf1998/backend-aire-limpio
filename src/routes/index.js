const { Router } = require('express');
const districtRoutes = require('./district.routes');
const measurementRoutes = require('./measurement.routes');
const userRoutes = require('./user.routes');
const variableRoutes = require('./variable.routes');
const zoneRoutes = require('./zone.routes');

const router = Router();

router.use('/api/districts', districtRoutes);
router.use('/api/measurements', measurementRoutes);
router.use('/api/users', userRoutes);
router.use('/api/variables', variableRoutes);
router.use('/api/zones', zoneRoutes);


module.exports = router;