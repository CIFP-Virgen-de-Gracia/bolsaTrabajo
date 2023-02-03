const {response,request} = require('express');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionSequelize');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionSequelize');


const verListado =  (req, res = response) => {
    const conex = new Conexion();

    conex.getlistado()
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        });    
}

//Lo mismo pero con Sequelize
const verListadoSequelize =  (req, res = response) => {
    const conx = new ConexionSequelize();

    conx.getlistado()    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

module.exports = {
    verListado,
    verListadoSequelize
}