//Realizado por Khattari
const esEsmpresa = (req, res, next) => {
    const body = req.body
    if (body.rol != 'empresa') {
        return res.status(403).json({
            message: "No autorizado"
        })
    }
    next()
}

const esAlumno = (req, res, next) => {
    const body = req.body
    if (body.rol != 'alumno') {
        return res.status(403).json({
            message: "No autorizado"
        })
    }
    next()
}

const esAdmin = (req, res, next) => {
    const body = req.body
    if (body.rol != 'admin') {
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