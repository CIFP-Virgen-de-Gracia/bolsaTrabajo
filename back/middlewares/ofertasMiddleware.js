//Realizado por Khattari
const esEsmpresa = (req, res, next) => {
    const body = req.body
    if (body.rol != 3) {
        return res.status(403).json({
            message: "No autorizado"
        })
    }
    next()
}

const esAlumno = (req, res, next) => {
    const body = req.body
    if (body.rol != 2) {
        return res.status(403).json({
            message: "No autorizado"
        })
    }
    next()
}

const esAdmin = (req, res, next) => {
    const body = req.body
    if (body.rol != 1) {
        return res.status(403).json({
            message: "No autorizado"
        })
    }
    next()
}

const puedeCrear = (req, res, next) => {
    const body = req.body
    if (body.rol != 'admin' && body.rol != 'empresa') {
        return res.status(403).json({
            message: 'No autorizado'
        })
    }
    next()
}

module.exports = {
    esAdmin,
    esAlumno,
    esEsmpresa
}