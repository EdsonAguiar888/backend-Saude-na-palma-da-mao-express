const bcrypt = require('bcryptjs');
const AppDataSource = require('../config/database');
const UsuarioSchema = require('../entities/Usuario');

class UsuarioService {
  constructor() {
    this.usuarioRepository = AppDataSource.getRepository(UsuarioSchema);
  }

  async criar(dados) {
    // Garante que a senha seja sempre armazenada como hash
    if (dados.senha_hash) {
      dados.senha_hash = await bcrypt.hash(dados.senha_hash, 10);
    }
    const usuario = this.usuarioRepository.create(dados);
    return await this.usuarioRepository.save(usuario);
  }

  async listar() {
    return await this.usuarioRepository.find();
  }

  async buscarPorId(id) {
    return await this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  async atualizar(id, dados) {
    await this.usuarioRepository.update(id, dados);
    return await this.buscarPorId(id);
  }

  async deletar(id) {
    return await this.usuarioRepository.delete(id);
  }
}

module.exports = new UsuarioService();