
const { Router } = require('express');
const especialidadeController = require('../controllers/EspecialidadeController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Especialidades
 *   description: Operações relacionadas às especialidades
 */

/**
 * @swagger
 * /api/v1/especialidades:
 *   post:
 *     summary: Cadastrar uma especialidade
 *     tags: [Especialidades]
 *     responses:
 *       201:
 *         description: Especialidade cadastrada
 *       400:
 *         description: Erro ao cadastrar especialidade
 */
router.post('/', especialidadeController.criar);

/**
 * @swagger
 * /api/v1/especialidades:
 *   get:
 *     summary: Listar especialidades
 *     tags: [Especialidades]
 *     responses:
 *       200:
 *         description: Lista de especialidades
 *       500:
 *         description: Erro interno ao listar especialidades
 */
router.get('/', especialidadeController.listar);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   get:
 *     summary: Buscar especialidade por ID
 *     tags: [Especialidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da especialidade
 *     responses:
 *       200:
 *         description: Especialidade encontrada
 *       404:
 *         description: Especialidade não encontrada
 *       500:
 *         description: Erro interno ao buscar especialidade
 */
router.get('/:id', especialidadeController.buscarPorId);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   put:
 *     summary: Atualizar especialidade
 *     tags: [Especialidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da especialidade
 *     responses:
 *       200:
 *         description: Especialidade atualizada
 *       400:
 *         description: Erro ao atualizar especialidade
 */
router.put('/:id', especialidadeController.atualizar);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   delete:
 *     summary: Excluir especialidade
 *     tags: [Especialidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da especialidade
 *     responses:
 *       204:
 *         description: Especialidade excluída sem conteúdo de resposta
 *       400:
 *         description: Erro ao excluir especialidade
 */
router.delete('/:id', especialidadeController.deletar);

module.exports = router;