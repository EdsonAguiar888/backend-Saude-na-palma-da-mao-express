const { Router } = require('express');
const clinicaController = require('../controllers/ClinicaController');

const adminMiddleware = require('../middlewares/adminMiddleware');


const router = Router();

router.get('/', clinicaController.listar);
router.get('/:id', clinicaController.buscarPorId);


router.post('/', adminMiddleware, clinicaController.criar);
router.put('/:id', adminMiddleware, clinicaController.atualizar);
router.delete('/:id', adminMiddleware, clinicaController.deletar);

module.exports = router;