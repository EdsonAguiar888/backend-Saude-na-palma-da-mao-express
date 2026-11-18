const { Router } = require('express');
const controller = require('../controllers/TriagemAgendamentoController');

const router = Router();

// Criar associação
router.post('/', controller.criar);

// Listar associações
router.get('/', controller.listar);

// Buscar associação pelo ID
router.get('/:id', controller.buscarPorId);

// Atualizar associação
router.put('/:id', controller.atualizar);

// Excluir associação
router.delete('/:id', controller.deletar);

module.exports = router;
