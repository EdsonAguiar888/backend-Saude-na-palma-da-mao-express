
function adminMiddleware(req, res, next) {
    if (req.user.tipo_usuario !== 'ADMINISTRADOR') {
        return res.status(403).json({
            mensagem: 'Acesso permitido somente para administradores.'
        });
    }

    return next();
}

module.exports = adminMiddleware;
