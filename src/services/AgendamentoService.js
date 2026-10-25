const AppDataSource = require('../config/database');
const AgendamentoSchema = require('../entities/Agendamento');

class AgendamentoService {
  constructor() {
    this.repository = AppDataSource.getRepository(AgendamentoSchema);
  }

  async criar(dados) {
    const agendamento = this.repository.create(dados);
    return await this.repository.save(agendamento);
  }

  async listar() {
    return await this.repository.find({
      relations: {
        paciente: true,
        profissionalClinica: true,
        especialidade: true,
      },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_agendamento: id },
      relations: {
        paciente: true,
        profissionalClinica: true,
        especialidade: true,
      },
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

module.exports = new AgendamentoService();
