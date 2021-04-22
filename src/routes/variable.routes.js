const { Router } = require('express');
const { variablesController } = require('../controllers');

const router = Router();

router.post('/', variablesController.createVariable);
router.get('/', variablesController.getVariables);
router.get('/:id', variablesController.getVariableById);
router.put('/:id', variablesController.updateVariableById);
router.delete('/:id', variablesController.deleteVariableById);

module.exports = router;