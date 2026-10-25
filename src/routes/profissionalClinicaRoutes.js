
const { Router } = require('express');
const controller = require('../controllers/ProfissionalClinicaController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Profissional-Clínica
 *   description: Associação entre profissionais e clínicas
 */

/**
 * @swagger
 * /api/v1/profissional-clinica:
 *   post:
 *     summary: Associar profissional a uma clínica
 *     tags: [Profissional-Clínica]
 *     responses:
 *       201:
 *         description: Associação criada
 *       400:
 *         description: Dados inválidos
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/v1/profissional-clinica:
 *   get:
 *     summary: Listar associações entre profissionais e clínicas
 *     tags: [Profissional-Clínica]
 *     responses:
 *       200:
 *         description: Lista de associações
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/v1/profissional-clinica/{id}:
 *   get:
 *     summary: Buscar associação por ID
 *     tags: [Profissional-Clínica]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do vínculo profissional-clínica
 *     responses:
 *       200:
 *         description: Associação encontrada
 *       404:
 *         description: Associação não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /api/v1/profissional-clinica/{id}:
 *   put:
 *     summary: Atualizar associação entre profissional e clínica
 *     tags: [Profissional-Clínica]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do vínculo profissional-clínica
 *     responses:
 *       200:
 *         description: Associação atualizada
 *       400:
 *         description: Erro ao atualizar associação
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/v1/profissional-clinica/{id}:
 *   delete:
 *     summary: Excluir associação entre profissional e clínica
 *     tags: [Profissional-Clínica]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do vínculo profissional-clínica
 *     responses:
 *       204:
 *         description: Associação excluída com sucesso
 *       400:
 *         description: Erro ao excluir associação
 */
router.delete('/:id', controller.deletar);

module.exports = router;