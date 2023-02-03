// const {response,request} = require('express');

//Este middleware recupera el campo edad del body y comprueba si es mayor de edad.
const esMayor = (req, res, next) => {
    const body = req.body;
    if (body.edad < 18) {
        return res.status(403).json({
          message: "No autorizado por menor de edad"
        });
      }
    next();
}

//Este lo uso simplemente para aplicarlo a un grupo de rutas.
const otroMiddleware = (req, res, next) => {
    if (1==2){
        return res.status(403).json({
            message: "No autorizado el acceso al grupo de rutas"
          });
    }
    next();
}

module.exports = {
    esMayor,
    otroMiddleware
}