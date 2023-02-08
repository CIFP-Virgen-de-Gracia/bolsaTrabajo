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

module.exports = {
    generarJWT
}