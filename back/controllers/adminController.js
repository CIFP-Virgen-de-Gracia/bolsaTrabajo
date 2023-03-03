//Realizado por Khattari
const {response,request} = require('express');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionAdmin');

const verListadoUsers = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getListadoUsers()
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const verListadoEmpresas = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getEmpresas()
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const verEmpresa = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getEmpresa(req.params.nif)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const crearEmpresa = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.crearEmpresa(req.body)
        .then( msg => {
            console.log('Insertado correctamente');
            res.status(201).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en el registro');
            res.status(203).json({'success':false});
        })
}

const verListadoAlumnos = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getAlumnos()
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const verAlumno = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getAlumno(req.params.nif)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

module.exports = {
    verListadoUsers,
    verListadoEmpresas,
    verEmpresa,
    crearEmpresa,
    verListadoAlumnos,
    verAlumno
}