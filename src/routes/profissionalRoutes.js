const { Router } = require('express');
const profissionalController = require('../controllers/ProfissionalController');

const router = Router();

const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', profissionalController.listar);
router.get('/:id', profissionalController.buscarPorId);

router.post('/', adminMiddleware, profissionalController.criar);
router.put('/:id', adminMiddleware, profissionalController.atualizar);
router.delete('/:id', adminMiddleware, profissionalController.deletar);

module.exports = router;