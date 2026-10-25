const { DataSource } = require('typeorm');
const UsuarioSchema = require('../entities/Usuario');
const PacienteSchema = require('../entities/Paciente');
const ProfissionalSchema = require('../entities/Profissional');
const ClinicaSchema = require('../entities/Clinica');
const EspecialidadeSchema = require('../entities/Especialidade');
const ProfissionalClinicaSchema = require('../entities/ProfissionalClinica');
const ProfissionalEspecialidadeSchema = require('../entities/ProfissionalEspecialidade');
const ClinicaEspecSchema = require('../entities/ClinicaEspec');
const DisponibilidadeSchema = require('../entities/Disponibilidade');
const AgendamentoSchema = require('../entities/Agendamento');
require('dotenv').config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'dpg-dbdqr6jrjlhs738318d0-a',
  // host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || 'projeto_user',
  password: process.env.DB_PASSWORD || '1wpnv43a4vI6oMVa54ibDCqQ4ZTY2OZF',
  // password: process.env.DB_PASSWORD || 'projeto_password',
  database: process.env.DB_NAME || 'projeto_db',
  synchronize: true, // Apenas para o desenvolvimento inicial (evita criar migrations manuais agora)
  logging: false,
  entities: [
    // Vamos registrar as entidades aqui conforme formos criando
    UsuarioSchema,
    PacienteSchema,
    ProfissionalSchema,
    ClinicaSchema,
    EspecialidadeSchema,
    ProfissionalClinicaSchema,
    ProfissionalEspecialidadeSchema,
    ClinicaEspecSchema,
    DisponibilidadeSchema,
    AgendamentoSchema,
  ],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
