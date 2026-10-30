const { Router } = require('express');
const usuarioController = require('../controllers/UsuarioController');

const router = Router();

const adminMiddleware = require('../middlewares/adminMiddleware');


router.get('/:id', usuarioController.buscarPorId);
router.put('/:id', usuarioController.atualizar);
router.delete('/:id', usuarioController.deletar);

router.get('/', adminMiddleware, usuarioController.listar);
router.post('/', adminMiddleware, usuarioController.criar);



module.exports = router;