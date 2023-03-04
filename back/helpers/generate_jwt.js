//Ines
//Generar Tokens de seguridad
const jwt = require('jsonwebtoken')


const generarJWT = (uid = '') => {

    //En el token podemos hacer que viaje (en el payload) el id de ese usuario. No supone un gran fallo de seguridad y nos permite sacar la información del mismo en los middleware.
    console.log("UID:" + uid)
    let token = jwt.sign({ uid }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '24h' // 24 hours
    });
    console.log("Token:" + token)
    return token;
}

const validarJWT = (req, res, next) => {
    //Leer el token
    const token = req.header('x-token');
    console.log("Token:" + token)
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}


module.exports = {
    generarJWT,
    validarJWT
}