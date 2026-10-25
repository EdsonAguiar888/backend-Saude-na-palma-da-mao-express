const service = require('../services/DisponibilidadeService');

class DisponibilidadeController {
  async criar(req, res) {
    try {
      const novaDisponibilidade = await service.criar(req.body);
      return res.status(201).json(novaDisponibilidade);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const disponibilidades = await service.listar();
      return res.json(disponibilidades);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const disponibilidade = await service.buscarPorId(id);
      if (!disponibilidade) {
        return res.status(404).json({ mensagem: 'Disponibilidade não encontrada.' });
      }
      return res.json(disponibilidade);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const disponibilidadeAtualizada = await service.atualizar(id, req.body);
      return res.json(disponibilidadeAtualizada);
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

module.exports = new DisponibilidadeController();
