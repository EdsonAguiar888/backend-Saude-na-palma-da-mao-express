
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AppDataSource = require('../config/database');
const UsuarioSchema = require('../entities/Usuario');

const usuarioRepository = AppDataSource.getRepository(UsuarioSchema);

class AuthController {
    async cadastrar(req, res) {
        try {
            const { nome, email, senha, telefone } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).json({
                    mensagem: 'Nome, e-mail e senha são obrigatórios.'
                });
            }

            const usuarioExistente = await usuarioRepository.findOneBy({ email });

            if (usuarioExistente) {
                return res.status(409).json({
                    mensagem: 'Este e-mail já está cadastrado.'
                });
            }

            const senhaHash = await bcrypt.hash(senha, 10);

            const usuario = usuarioRepository.create({
                nome,
                email,
                senha_hash: senhaHash,
                telefone,
                tipo_usuario: 'PACIENTE'
            });

            const usuarioSalvo = await usuarioRepository.save(usuario);

            return res.status(201).json({
                id_usuario: usuarioSalvo.id_usuario,
                nome: usuarioSalvo.nome,
                email: usuarioSalvo.email,
                telefone: usuarioSalvo.telefone,
                tipo_usuario: usuarioSalvo.tipo_usuario,
                ativo: usuarioSalvo.ativo,
                criado_em: usuarioSalvo.criado_em
            });
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);

            return res.status(500).json({
                mensagem: 'Erro ao cadastrar usuário.'
            });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({
                    mensagem: 'E-mail e senha são obrigatórios.'
                });
            }

            const usuario = await usuarioRepository.findOneBy({ email });

            if (!usuario || !usuario.ativo) {
                return res.status(401).json({
                    mensagem: 'E-mail ou senha inválidos.'
                });
            }

            const senhaValida = await bcrypt.compare(
                senha,
                usuario.senha_hash
            );

            if (!senhaValida) {
                return res.status(401).json({
                    mensagem: 'E-mail ou senha inválidos.'
                });
            }

            const token = jwt.sign(
                {
                    id_usuario: usuario.id_usuario,
                    tipo_usuario: usuario.tipo_usuario
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
                }
            );

            return res.json({
                token,
                usuario: {
                    id_usuario: usuario.id_usuario,
                    nome: usuario.nome,
                    email: usuario.email,
                    tipo_usuario: usuario.tipo_usuario
                }
            });
        } catch (error) {
            console.error('Erro ao realizar login:', error);

            return res.status(500).json({
                mensagem: 'Erro ao realizar login.'
            });
        }
    }
}

module.exports = new AuthController();
