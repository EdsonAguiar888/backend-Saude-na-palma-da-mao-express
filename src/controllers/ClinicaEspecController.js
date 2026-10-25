const service = require('../services/ClinicaEspecService');

class ClinicaEspecController {
  async criar(req, res) {
    try {
      const novoVinculo = await service.criar(req.body);
      return res.status(201).json(novoVinculo);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const vinculos = await service.listar();
      return res.json(vinculos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { idClinica, idEspecialidade } = req.params;
      const vinculo = await service.buscarPorChaveComposta(idClinica, idEspecialidade);
      if (!vinculo) {
        return res.status(404).json({ mensagem: 'Associação clínica-especialidade não encontrada.' });
      }
      return res.json(vinculo);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { idClinica, idEspecialidade } = req.params;
      await service.deletar(idClinica, idEspecialidade);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ClinicaEspecController();