const {response,request} = require('express');
const ConexionSequelize = require('./Conexion/ConexionSequelize');

const alumnoGet =  (req, res = response) => {
    const conx = new ConexionSequelize();
    
    conx.getAlumno(req.params.nif)    
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log(err);
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

/* const alumnoPut =  (req, res = response) => {
    const conx = new ConexionSequelize();
    
    conx.modificarAlumno(req.params.dni, req.body)    
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en la modificación!');
            res.status(203).json(err);
        });
} */

module.exports = {
    alumnoGet,
    //alumnoPut
}