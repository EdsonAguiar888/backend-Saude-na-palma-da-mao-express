
const { Router } = require('express');
const profissionalController = require('../controllers/ProfissionalController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Profissionais
 *   description: Operações relacionadas aos profissionais
 */

/**
 * @swagger
 * /api/v1/profissionais:
 *   post:
 *     summary: Cadastrar um profissional
 *     tags: [Profissionais]
 *     responses:
 *       201:
 *         description: Profissional cadastrado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', profissionalController.criar);

/**
 * @swagger
 * /api/v1/profissionais:
 *   get:
 *     summary: Listar profissionais
 *     tags: [Profissionais]
 *     responses:
 *       200:
 *         description: Lista de profissionais
 */
router.get('/', profissionalController.listar);

/**
 * @swagger
 * /api/v1/profissionais/{id}:
 *   get:
 *     summary: Buscar profissional por ID
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do profissional
 *     responses:
 *       200:
 *         description: Profissional encontrado
 *       404:
 *         description: Profissional não encontrado
 */
router.get('/:id', profissionalController.buscarPorId);

/**
 * @swagger
 * /api/v1/profissionais/{id}:
 *   put:
 *     summary: Atualizar profissional
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do profissional
 *     responses:
 *       200:
 *         description: Profissional atualizado
 *       404:
 *         description: Profissional não encontrado
 */
router.put('/:id', profissionalController.atualizar);

/**
 * @swagger
 * /api/v1/profissionais/{id}:
 *   delete:
 *     summary: Excluir profissional
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do profissional
 *     responses:
 *       200:
 *         description: Profissional excluído
 *       404:
 *         description: Profissional não encontrado
 */
router.delete('/:id', profissionalController.deletar);

module.exports = router;