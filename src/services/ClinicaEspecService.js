const AppDataSource = require('../config/database');
const ClinicaEspecSchema = require('../entities/ClinicaEspec');

class ClinicaEspecService {
  constructor() {
    this.repository = AppDataSource.getRepository(ClinicaEspecSchema);
  }

  async criar(dados) {
    const vinculo = this.repository.create(dados);
    return await this.repository.save(vinculo);
  }

  async listar() {
    return await this.repository.find({
      relations: { clinica: true, especialidade: true },
    });
  }

  async buscarPorChaveComposta(idClinica, idEspecialidade) {
    return await this.repository.findOne({
      where: {
        id_clinica: idClinica,
        id_especialidade: idEspecialidade,
      },
      relations: { clinica: true, especialidade: true },
    });
  }

  async deletar(idClinica, idEspecialidade) {
    return await this.repository.delete({
      id_clinica: idClinica,
      id_especialidade: idEspecialidade,
    });
  }
}

module.exports = new ClinicaEspecService();