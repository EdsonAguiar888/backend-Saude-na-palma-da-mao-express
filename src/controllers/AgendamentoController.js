const service = require('../services/AgendamentoService');

class AgendamentoController {
  async criar(req, res) {
    try {
      const novoAgendamento = await service.criar(req.body);
      return res.status(201).json(novoAgendamento);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const agendamentos = await service.listar();
      return res.json(agendamentos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const agendamento = await service.buscarPorId(id);
      if (!agendamento) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado.' });
      }
      return res.json(agendamento);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const agendamentoAtualizado = await service.atualizar(id, req.body);
      return res.json(agendamentoAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await service.deletar(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new AgendamentoController();
