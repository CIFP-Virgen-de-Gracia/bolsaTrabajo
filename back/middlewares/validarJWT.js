const jwt = require('jsonwebtoken');
const {response, request} = require('express')  //Incorporamos esto aquí porque vamos a añadir elementos a req que sacaremos del token.

const validarJWT = (req , res , next) => {  //Estas asignaciones son necesarias para almacenar en el request los datos que extraigamos del token.
    const token = req.header('x-token');  //Este nombre será establecido en el cliente también.

    if (!token){
        return res.status(401).json({'msg':'No hay token en la petición.'});
    }

    try {
        
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.dniToken = uid;
        console.log(uid);
        console.log(token);
        next();
        
    }catch(error){
        console.log(error);
        res.status(401).json({'msg':'Token no válido.'});
    }
}

module.exports = {
    validarJWT
}