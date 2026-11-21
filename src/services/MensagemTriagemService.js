
const AppDataSource = require('../config/database');
const MensagemTriagemSchema = require('../entities/MensagemTriagem');

class MensagemTriagemService {
  constructor() {
    this.repository = AppDataSource.getRepository(MensagemTriagemSchema);
  }

  async criar(dados) {
    const mensagem = this.repository.create(dados);
    return await this.repository.save(mensagem);
  }

  async listar() {
    return await this.repository.find({
      relations: {
        preTriagem: true,
      },
      order: {
        id_triagem: 'ASC',
        ordem: 'ASC',
      },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_mensagem: id },
      relations: {
        preTriagem: true,
      },
    });
  }

  async atualizar(id, dados) {
    const mensagem = await this.buscarPorId(id);

    if (!mensagem) {
      throw new Error('Mensagem de triagem não encontrada.');
    }

    await this.repository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    const mensagem = await this.buscarPorId(id);

    if (!mensagem) {
      throw new Error('Mensagem de triagem não encontrada.');
    }

    return await this.repository.delete(id);
  }
}

module.exports = new MensagemTriagemService();
