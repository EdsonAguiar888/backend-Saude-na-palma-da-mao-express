
const service = require('../services/MensagemTriagemService');

class MensagemTriagemController {

  async criar(req, res) {
    try {
      const novaMensagem = await service.criar(req.body);

      return res.status(201).json(novaMensagem);
    } catch (error) {
      return res.status(400).json({
        erro: error.message,
      });
    }
  }

  async listar(req, res) {
    try {
      const mensagens = await service.listar();

      return res.status(200).json(mensagens);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const mensagem = await service.buscarPorId(id);

      if (!mensagem) {
        return res.status(404).json({
          mensagem: 'Mensagem de triagem não encontrada.',
        });
      }

      return res.status(200).json(mensagem);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const mensagemAtualizada = await service.atualizar(
        id,
        req.body
      );

      return res.status(200).json(mensagemAtualizada);
    } catch (error) {
      const status =
        error.message === 'Mensagem de triagem não encontrada.'
          ? 404
          : 400;

      return res.status(status).json({
        erro: error.message,
      });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;

      await service.deletar(id);

      return res.status(204).send();
    } catch (error) {
      const status =
        error.message === 'Mensagem de triagem não encontrada.'
          ? 404
          : 400;

      return res.status(status).json({
        erro: error.message,
      });
    }
  }
}

module.exports = new MensagemTriagemController();
