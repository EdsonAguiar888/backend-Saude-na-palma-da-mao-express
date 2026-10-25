const { Router } = require('express');
const controller = require('../controllers/ClinicaEspecController');

const router = Router();

router.post('/', controller.criar);
router.get('/', controller.listar);
router.get('/:idClinica/:idEspecialidade', controller.buscarPorId);
router.delete('/:idClinica/:idEspecialidade', controller.deletar);

module.exports = router;