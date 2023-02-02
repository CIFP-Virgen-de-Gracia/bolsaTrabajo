const jwt = require('jsonwebtoken');
const {response, request} = require('express')  

const validarJWT = (req , res , next) => {  
    const token = req.header('x-token');  //TODO:recordar este nombre de header

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