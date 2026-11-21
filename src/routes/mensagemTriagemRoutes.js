
const { Router } = require('express');
const controller = require('../controllers/MensagemTriagemController');

const router = Router();

// Criar uma mensagem
router.post('/', controller.criar);

// Listar todas as mensagens
router.get('/', controller.listar);

// Buscar uma mensagem pelo ID
router.get('/:id', controller.buscarPorId);

// Atualizar uma mensagem
router.put('/:id', controller.atualizar);

// Excluir uma mensagem
router.delete('/:id', controller.deletar);

module.exports = router;
