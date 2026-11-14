
const service = require('../services/PreTriagemService');

class PreTriagemController {
  async criar(req, res) {
    try {
      const novaPreTriagem = await service.criar(req.body);
      return res.status(201).json(novaPreTriagem);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const preTriagens = await service.listar();
      return res.json(preTriagens);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const preTriagem = await service.buscarPorId(id);

      if (!preTriagem) {
        return res.status(404).json({
          mensagem: 'Pré-triagem não encontrada.',
        });
      }

      return res.json(preTriagem);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const preTriagemAtualizada = await service.atualizar(id, req.body);
      return res.json(preTriagemAtualizada);
    } catch (error) {
      const status = error.message === 'Pré-triagem não encontrada.' ? 404 : 400;
      return res.status(status).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await service.deletar(id);
      return res.status(204).send();
    } catch (error) {
      const status = error.message === 'Pré-triagem não encontrada.' ? 404 : 400;
      return res.status(status).json({ erro: error.message });
    }
  }
}

module.exports = new PreTriagemController();
