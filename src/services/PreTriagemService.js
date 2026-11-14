
const AppDataSource = require('../config/database');
const PreTriagemSchema = require('../entities/PreTriagem');

class PreTriagemService {
  constructor() {
    this.repository = AppDataSource.getRepository(PreTriagemSchema);
  }

  async criar(dados) {
    const preTriagem = this.repository.create(dados);
    return await this.repository.save(preTriagem);
  }

  async listar() {
    return await this.repository.find({
      relations: {
        paciente: true,
        especialidadeSugerida: true,
      },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_triagem: id },
      relations: {
        paciente: true,
        especialidadeSugerida: true,
      },
    });
  }

  async atualizar(id, dados) {
    const preTriagem = await this.buscarPorId(id);

    if (!preTriagem) {
      throw new Error('Pré-triagem não encontrada.');
    }

    await this.repository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    const preTriagem = await this.buscarPorId(id);

    if (!preTriagem) {
      throw new Error('Pré-triagem não encontrada.');
    }

    return await this.repository.delete(id);
  }
}

module.exports = new PreTriagemService();
