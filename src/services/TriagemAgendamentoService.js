const AppDataSource = require('../config/database');
const TriagemAgendamentoSchema = require('../entities/TriagemAgendamento');

class TriagemAgendamentoService {
  constructor() {
    this.repository = AppDataSource.getRepository(TriagemAgendamentoSchema);
  }

  async criar(dados) {
    const associacaoExistente = await this.repository.findOne({
      where: { id_triagem: dados.id_triagem },
    });

    if (associacaoExistente) {
      throw new Error('Esta pré-triagem já possui um agendamento associado.');
    }

    const triagemAgendamento = this.repository.create(dados);

    return await this.repository.save(triagemAgendamento);
  }

  async listar() {
    return await this.repository.find({
      relations: {
        preTriagem: true,
        agendamento: true,
      },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_triagem_agendamento: id },
      relations: {
        preTriagem: true,
        agendamento: true,
      },
    });
  }

  async atualizar(id, dados) {
    const associacao = await this.buscarPorId(id);

    if (!associacao) {
      throw new Error('Associação de triagem e agendamento não encontrada.');
    }

    if (dados.id_triagem !== undefined) {
      const associacaoExistente = await this.repository.findOne({
        where: { id_triagem: dados.id_triagem },
      });

      if (
        associacaoExistente &&
        String(associacaoExistente.id_triagem_agendamento) !== String(id)
      ) {
        throw new Error('Esta pré-triagem já possui um agendamento associado.');
      }
    }

    await this.repository.update(id, dados);

    return await this.buscarPorId(id);
  }

  async deletar(id) {
    const associacao = await this.buscarPorId(id);

    if (!associacao) {
      throw new Error('Associação de triagem e agendamento não encontrada.');
    }

    return await this.repository.delete(id);
  }
}

module.exports = new TriagemAgendamentoService();
