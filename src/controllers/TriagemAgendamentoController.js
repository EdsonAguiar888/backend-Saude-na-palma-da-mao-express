const service = require('../services/TriagemAgendamentoService');

class TriagemAgendamentoController {
  async criar(req, res) {
    try {
      const novaAssociacao = await service.criar(req.body);

      return res.status(201).json(novaAssociacao);
    } catch (error) {
      return res.status(400).json({
        erro: error.message,
      });
    }
  }

  async listar(req, res) {
    try {
      const associacoes = await service.listar();

      return res.status(200).json(associacoes);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const associacao = await service.buscarPorId(id);

      if (!associacao) {
        return res.status(404).json({
          mensagem: 'Associação de triagem e agendamento não encontrada.',
        });
      }

      return res.status(200).json(associacao);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const associacaoAtualizada = await service.atualizar(id, req.body);

      return res.status(200).json(associacaoAtualizada);
    } catch (error) {
      const status =
        error.message === 'Associação de triagem e agendamento não encontrada.'
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
        error.message === 'Associação de triagem e agendamento não encontrada.'
          ? 404
          : 400;

      return res.status(status).json({
        erro: error.message,
      });
    }
  }
}

module.exports = new TriagemAgendamentoController();
