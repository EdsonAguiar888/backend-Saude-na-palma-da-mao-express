const AppDataSource = require('../config/database');
const DisponibilidadeSchema = require('../entities/Disponibilidade');

class DisponibilidadeService {
  constructor() {
    this.repository = AppDataSource.getRepository(DisponibilidadeSchema);
  }

  async criar(dados) {
    const disponibilidade = this.repository.create(dados);
    return await this.repository.save(disponibilidade);
  }

  async listar() {
    return await this.repository.find({
      relations: { profissionalClinica: true }, // Corrigido para o nome exato da relação na entidade
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_disponibilidade: id },
      relations: { profissionalClinica: true }, // Corrigido para o nome exato da relação na entidade
    });
  }

  async atualizar(id, dados) {
    await this.repository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.repository.delete(id);
  }
}

module.exports = new DisponibilidadeService();
