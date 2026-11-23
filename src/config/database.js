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
const PreTriagemSchema = require('../entities/PreTriagem');
const TriagemAgendamentoSchema = require('../entities/TriagemAgendamento');
const NotificacaoSchema = require('../entities/Notificacao');

const MensagemTriagemSchema = require('../entities/MensagemTriagem');
require('dotenv').config();

const AppDataSource = new DataSource({
  type: 'postgres',

  host: process.env.DB_HOST || 'dpg-dc28esrncjis739ja440-a',
  // host: process.env.DB_HOST || 'localhost',

  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || 'db_saude_na_palma_da_mao_2_user',

  password: process.env.DB_PASSWORD || 'mzO4BrstBtOvcGAGAFmFncvgeO5pmqM7',
  // password: process.env.DB_PASSWORD || 'projeto_password',

  database: process.env.DB_NAME || 'db_saude_na_palma_da_mao_2',
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
    PreTriagemSchema,
    TriagemAgendamentoSchema,
    NotificacaoSchema,
    MensagemTriagemSchema,
  ],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
