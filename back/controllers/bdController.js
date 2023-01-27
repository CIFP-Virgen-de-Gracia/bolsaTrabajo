const {response,request} = require('express');
const Conexion = require('./Conexion');


const verListado =  (req, res = response) => {
    const conex = new Conexion();

    conex.getlistado()
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(200).json({'msg':'No se han encontrado registros'});
        });    
}

module.exports = {
    verListado
}