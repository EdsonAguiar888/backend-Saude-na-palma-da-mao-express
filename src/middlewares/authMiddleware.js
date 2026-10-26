
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({
            mensagem: 'Token de autenticação não informado.'
        });
    }

    const token = authorization.split(' ')[1];

    try {
        const usuarioAutenticado = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = usuarioAutenticado;

        return next();
    } catch (error) {
        return res.status(401).json({
            mensagem: 'Token inválido ou expirado.'
        });
    }
}

module.exports = authMiddleware;
