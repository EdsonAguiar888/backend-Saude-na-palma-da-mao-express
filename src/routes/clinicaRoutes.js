
const { Router } = require('express');
const clinicaController = require('../controllers/ClinicaController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clínicas
 *   description: Operações relacionadas às clínicas
 */

/**
 * @swagger
 * /api/v1/clinicas:
 *   post:
 *     summary: Cadastrar uma clínica
 *     tags: [Clínicas]
 *     responses:
 *       201:
 *         description: Clínica cadastrada com sucesso
 *       400:
 *         description: Erro ao cadastrar a clínica
 */
router.post('/', clinicaController.criar);

/**
 * @swagger
 * /api/v1/clinicas:
 *   get:
 *     summary: Listar clínicas
 *     tags: [Clínicas]
 *     responses:
 *       200:
 *         description: Lista de clínicas
 *       500:
 *         description: Erro interno ao listar clínicas
 */
router.get('/', clinicaController.listar);

/**
 * @swagger
 * /api/v1/clinicas/{id}:
 *   get:
 *     summary: Buscar clínica por ID
 *     tags: [Clínicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da clínica
 *     responses:
 *       200:
 *         description: Clínica encontrada
 *       404:
 *         description: Clínica não encontrada
 *       500:
 *         description: Erro interno ao buscar clínica
 */
router.get('/:id', clinicaController.buscarPorId);

/**
 * @swagger
 * /api/v1/clinicas/{id}:
 *   put:
 *     summary: Atualizar clínica
 *     tags: [Clínicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da clínica
 *     responses:
 *       200:
 *         description: Clínica atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar a clínica
 */
router.put('/:id', clinicaController.atualizar);

/**
 * @swagger
 * /api/v1/clinicas/{id}:
 *   delete:
 *     summary: Excluir clínica
 *     tags: [Clínicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da clínica
 *     responses:
 *       204:
 *         description: Clínica excluída com sucesso, sem conteúdo de resposta
 *       400:
 *         description: Erro ao excluir a clínica
 */
router.delete('/:id', clinicaController.deletar);

module.exports = router;