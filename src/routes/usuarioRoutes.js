
const { Router } = require('express');
const usuarioController = require('../controllers/UsuarioController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas aos usuários
 */

/**
 * @swagger
 * /api/v1/usuarios:
 *   post:
 *     summary: Criar um usuário
 *     tags: [Usuários]
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar o usuário
 */
router.post('/', usuarioController.criar);

/**
 * @swagger
 * /api/v1/usuarios:
 *   get:
 *     summary: Listar usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       500:
 *         description: Erro interno ao listar usuários
 */
router.get('/', usuarioController.listar);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno ao buscar usuário
 */
router.get('/:id', usuarioController.buscarPorId);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   put:
 *     summary: Atualizar usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do usuário
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o usuário
 */
router.put('/:id', usuarioController.atualizar);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   delete:
 *     summary: Excluir usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do usuário
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso, sem conteúdo de resposta
 *       400:
 *         description: Erro ao excluir o usuário
 */
router.delete('/:id', usuarioController.deletar);

module.exports = router;