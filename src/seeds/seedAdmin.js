
require('dotenv').config();

const bcrypt = require('bcryptjs');
const AppDataSource = require('../config/database');
const UsuarioSchema = require('../entities/Usuario');

async function criarAdmin() {
  const nome = process.env.ADMIN_NAME || 'Administrador';
  const email = process.env.ADMIN_EMAIL;
  const senha = process.env.ADMIN_PASSWORD;

  if (!email || !senha) {
    throw new Error(
      'Configure ADMIN_EMAIL e ADMIN_PASSWORD nas variáveis de ambiente.'
    );
  }

  if (senha.length < 6) {
    throw new Error('A senha do administrador deve ter pelo menos 6 caracteres.');
  }

  await AppDataSource.initialize();

  try {
    const usuarioRepository = AppDataSource.getRepository(UsuarioSchema);

    const adminExistente = await usuarioRepository.findOneBy({ email });

    if (adminExistente) {
      if (adminExistente.tipo_usuario !== 'ADMINISTRADOR') {
        throw new Error(
          'O e-mail informado já pertence a um usuário que não é administrador.'
        );
      }

      console.log('O administrador já existe. Nenhum usuário foi criado.');
      return;
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    const admin = usuarioRepository.create({
      nome,
      email,
      senha_hash,
      tipo_usuario: 'ADMINISTRADOR',
      ativo: true
    });

    const adminSalvo = await usuarioRepository.save(admin);

    console.log('Administrador criado com sucesso.');
    console.log({
      id_usuario: adminSalvo.id_usuario,
      nome: adminSalvo.nome,
      email: adminSalvo.email,
      tipo_usuario: adminSalvo.tipo_usuario
    });
  } finally {
    await AppDataSource.destroy();
  }
}

criarAdmin().catch((error) => {
  console.error('Erro ao criar administrador:', error.message);
  process.exitCode = 1;
});
