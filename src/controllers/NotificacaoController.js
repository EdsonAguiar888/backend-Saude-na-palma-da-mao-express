const service = require('../services/NotificacaoService');

class NotificacaoController {
  async criar(req, res) {
    try {
      const novaNotificacao = await service.criar(req.body);

      return res.status(201).json(novaNotificacao);
    } catch (error) {
      return res.status(400).json({
        erro: error.message,
      });
    }
  }

  async listar(req, res) {
    try {
      const notificacoes = await service.listar();

      return res.status(200).json(notificacoes);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const notificacao = await service.buscarPorId(id);

      if (!notificacao) {
        return res.status(404).json({
          mensagem: 'Notificação não encontrada.',
        });
      }

      return res.status(200).json(notificacao);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async listarPorUsuario(req, res) {
    try {
      const { idUsuario } = req.params;

      const notificacoes = await service.listarPorUsuario(idUsuario);

      return res.status(200).json(notificacoes);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const notificacaoAtualizada = await service.atualizar(id, req.body);

      return res.status(200).json(notificacaoAtualizada);
    } catch (error) {
      const status =
        error.message === 'Notificação não encontrada.' ? 404 : 400;

      return res.status(status).json({
        erro: error.message,
      });
    }
  }

  async marcarComoLida(req, res) {
    try {
      const { id } = req.params;

      const notificacao = await service.marcarComoLida(id);

      return res.status(200).json(notificacao);
    } catch (error) {
      const status =
        error.message === 'Notificação não encontrada.' ? 404 : 400;

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
        error.message === 'Notificação não encontrada.' ? 404 : 400;

      return res.status(status).json({
        erro: error.message,
      });
    }
  }
}

module.exports = new NotificacaoController();
