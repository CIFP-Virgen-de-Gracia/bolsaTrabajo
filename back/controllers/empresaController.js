const {response,request} = require('express');
// const Conexion = require('./Conexion');
const Conexion = require('./Conexion/ConexionEmpresa');

const empresasGet =  (req, res = response) => {
    const conx = new Conexion();

    conx.getEmpresaListado()    
        .then( msg => {
            console.log('Listado de empresas correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const empresaGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getEmpresa(req.params.id)    
        .then( msg => {
            console.log('Listado de empresa correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const empresasPost =  (req = request, res = response) => {
    const conx = new Conexion();
    
    conx.registrarEmpresa(req.body)    
        .then( msg => {
            console.log('Empresa insertada correctamente!');
            res.status(201).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el registro de empresa!');
            res.status(203).json(err);
        });
}

const empresasPut = (req = request, res = response) => {
    const conx = new Conexion();

    conx.modificarEmpresa(req.params.id, req.body)
        .then( msg => {
            console.log("Empresa modificada con exito");
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Error en la modificación.');
            res.status(203).json(err);
        });
}

const empresasDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarEmpresa(req.params.id)    
        .then( msg => {
            console.log('Empresa borrada correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}


module.exports = {
    empresasGet,
    empresaGet,
    empresasPost,
    empresasPut,
    empresasDelete
}