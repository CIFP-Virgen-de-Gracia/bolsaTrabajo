const {response,request} = require('express');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionOferta');

const getOfertasEmpresa = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getOfertasEmpresa(req.params.nif)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const getEmpresaAsignada = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getEmpresaAsignada(req.params.id)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const getDatosEmpresaAsignada = (req, res = response) => {
    const conex = new ConexionSequelize();
    
    conex.getEmpresaAsignada(req.params.id)
        .then( resul => {
            conex.getDatosEmpresaAsignada(resul.EmpresasOfertas[0].nif_empresa)
                .then( datos => {
                    res.status(200).json(datos);
                })
        })
}

module.exports = {
    getOfertasEmpresa,
    getEmpresaAsignada,
    getDatosEmpresaAsignada
}
