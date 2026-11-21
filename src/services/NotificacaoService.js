const AppDataSource = require('../config/database');
const NotificacaoSchema = require('../entities/Notificacao');

class NotificacaoService {
  constructor() {
    this.repository = AppDataSource.getRepository(NotificacaoSchema);
  }

  async criar(dados) {
    const notificacao = this.repository.create(dados);

    return await this.repository.save(notificacao);
  }

  async listar() {
    return await this.repository.find({
      relations: {
        usuario: true,
      },
      order: {
        criado_em: 'DESC',
      },
    });
  }

  async buscarPorId(id) {
    return await this.repository.findOne({
      where: { id_notificacao: id },
      relations: {
        usuario: true,
      },
    });
  }

  async listarPorUsuario(idUsuario) {
    return await this.repository.find({
      where: {
        id_usuario: idUsuario,
      },
      order: {
        criado_em: 'DESC',
      },
    });
  }

  async atualizar(id, dados) {
    const notificacao = await this.buscarPorId(id);

    if (!notificacao) {
      throw new Error('Notificação não encontrada.');
    }

    await this.repository.update(id, dados);

    return await this.buscarPorId(id);
  }

  async marcarComoLida(id) {
    const notificacao = await this.buscarPorId(id);

    if (!notificacao) {
      throw new Error('Notificação não encontrada.');
    }

    await this.repository.update(id, {
      lida: true,
    });

    return await this.buscarPorId(id);
  }

  async deletar(id) {
    const notificacao = await this.buscarPorId(id);

    if (!notificacao) {
      throw new Error('Notificação não encontrada.');
    }

    return await this.repository.delete(id);
  }
}

module.exports = new NotificacaoService();
