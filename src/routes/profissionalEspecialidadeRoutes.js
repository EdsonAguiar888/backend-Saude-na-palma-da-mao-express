
const { Router } = require('express');
const controller = require('../controllers/ProfissionalEspecialidadeController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Profissional-Especialidade
 *   description: Associação entre profissionais e especialidades
 */

/**
 * @swagger
 * /api/v1/profissional-especialidade:
 *   post:
 *     summary: Associar profissional a uma especialidade
 *     tags: [Profissional-Especialidade]
 *     responses:
 *       201:
 *         description: Associação criada
 *       400:
 *         description: Dados inválidos
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/v1/profissional-especialidade:
 *   get:
 *     summary: Listar associações entre profissionais e especialidades
 *     tags: [Profissional-Especialidade]
 *     responses:
 *       200:
 *         description: Lista de associações
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/v1/profissional-especialidade/{idProfissional}/{idEspecialidade}:
 *   get:
 *     summary: Buscar associação por profissional e especialidade
 *     tags: [Profissional-Especialidade]
 *     parameters:
 *       - in: path
 *         name: idProfissional
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do profissional
 *       - in: path
 *         name: idEspecialidade
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da especialidade
 *     responses:
 *       200:
 *         description: Associação encontrada
 *       404:
 *         description: Associação não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:idProfissional/:idEspecialidade', controller.buscarPorId);

/**
 * @swagger
 * /api/v1/profissional-especialidade/{idProfissional}/{idEspecialidade}:
 *   delete:
 *     summary: Excluir associação entre profissional e especialidade
 *     tags: [Profissional-Especialidade]
 *     parameters:
 *       - in: path
 *         name: idProfissional
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do profissional
 *       - in: path
 *         name: idEspecialidade
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da especialidade
 *     responses:
 *       204:
 *         description: Associação excluída com sucesso
 *       400:
 *         description: Erro ao excluir associação
 */
router.delete('/:idProfissional/:idEspecialidade', controller.deletar);

module.exports = router;