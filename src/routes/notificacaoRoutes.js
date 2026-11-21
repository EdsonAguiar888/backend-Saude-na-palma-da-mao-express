const { Router } = require('express');
const controller = require('../controllers/NotificacaoController');

const router = Router();

// Criar notificação
router.post('/', controller.criar);

// Listar todas as notificações
router.get('/', controller.listar);

// Listar notificações de um usuário
router.get('/usuario/:idUsuario', controller.listarPorUsuario);

// Marcar notificação como lida
router.patch('/:id/lida', controller.marcarComoLida);

// Buscar notificação pelo ID
router.get('/:id', controller.buscarPorId);

// Atualizar notificação
router.put('/:id', controller.atualizar);

// Excluir notificação
router.delete('/:id', controller.deletar);

module.exports = router;
