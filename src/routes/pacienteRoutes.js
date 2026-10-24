
const { Router } = require('express');
const pacienteController = require('../controllers/PacienteController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Operações relacionadas aos pacientes
 */

/**
 * @swagger
 * /api/v1/pacientes:
 *   post:
 *     summary: Cadastrar um paciente
 *     tags: [Pacientes]
 *     responses:
 *       201:
 *         description: Paciente cadastrado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', pacienteController.criar);

/**
 * @swagger
 * /api/v1/pacientes:
 *   get:
 *     summary: Listar pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', pacienteController.listar);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   get:
 *     summary: Buscar paciente por ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do paciente
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Paciente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', pacienteController.buscarPorId);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   put:
 *     summary: Atualizar paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do paciente
 *     responses:
 *       200:
 *         description: Paciente atualizado
 *       400:
 *         description: Erro ao atualizar paciente
 */
router.put('/:id', pacienteController.atualizar);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   delete:
 *     summary: Excluir paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do paciente
 *     responses:
 *       204:
 *         description: Paciente excluído com sucesso
 *       400:
 *         description: Erro ao excluir paciente
 */
router.delete('/:id', pacienteController.deletar);

module.exports = router;