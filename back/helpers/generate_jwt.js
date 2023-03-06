//Ines
//descripcion: JSON WEB TOKEN, hay uno adicional en helpers pero he utilizado este para hacer pruebas
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

const validarJWT = (token) => {

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        return [true, uid];
    } catch (error) {
        return [false, null];
    }

}

const decodeJWT = (token = '') => {

    try {
        const { uid } = jwt.decode(token, process.env.SECRETORPRIVATEKEY);
        return [true, uid];
    } catch (error) {
        return [false, null];
    }

}


module.exports = {
    generarJWT,
    validarJWT,
    decodeJWT
}