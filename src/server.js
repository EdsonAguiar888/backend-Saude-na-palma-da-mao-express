const express = require('express');
const cors = require('cors');
require('dotenv').config();
const AppDataSource = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Importação das rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const clinicaRoutes = require('./routes/clinicaRoutes');
const especialidadeRoutes = require('./routes/especialidadeRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');

const profissionalClinicaRoutes = require('./routes/profissionalClinicaRoutes');
const profissionalEspecialidadeRoutes = require('./routes/profissionalEspecialidadeRoutes');
const clinicaEspecRoutes = require('./routes/clinicaEspecRoutes');
const disponibilidadeRoutes = require('./routes/disponibilidadeRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

app.use('/api/v1/usuarios', usuarioRoutes);
app.use('/api/v1/clinicas', clinicaRoutes);
app.use('/api/v1/especialidades', especialidadeRoutes);
app.use('/api/v1/pacientes', pacienteRoutes);
app.use('/api/v1/profissionais', profissionalRoutes);

app.use('/api/v1/profissional-clinica', profissionalClinicaRoutes);
app.use('/api/v1/profissional-especialidade', profissionalEspecialidadeRoutes);
app.use('/api/v1/clinica-especialidade', clinicaEspecRoutes);
app.use('/api/v1/disponibilidades', disponibilidadeRoutes);
app.use('/api/v1/agendamentos', agendamentoRoutes);

// Rota de teste inicial para a API (seguindo o prefixo v1)
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend Projeto_SPM API funcionando com sucesso!' });
});



// Inicializando o Banco de Dados e o Servidor Express
AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conexão com o PostgreSQL estabelecida com sucesso!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erro durante a inicialização do Data Source:', error);
  });