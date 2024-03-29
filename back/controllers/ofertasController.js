const {response,request} = require('express');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionOferta');

const verListadoOfertas = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getListadoOfertas()
        .then( msg => {
                console.log('Listado correcto!');
                res.status(200).json(msg);
        })
        .catch(err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const verOferta = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getOferta(req.params.id)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        })
}

const crearOferta = (req = request, res = response) => {
    const conex = new ConexionSequelize();

    conex.crearOferta(req.body)
        .then( msg => {
            console.log('Insertado correctamente!');
            res.status(201).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en el registro!');
            res.status(203).json({'success':false});
        })
}

const eliminarOferta = (req = request, res = response) => {
    const conex = new ConexionSequelize();

    conex.eliminarOferta(req.params.id)
        .then( msg => {
            console.log('Eliminado correctamente!');
            res.status(201).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en el registro!');
            res.status(203).json({'success':false});
        })
}

const actualizarOferta = (req = request, res = response) => {
    const conex = new ConexionSequelize();

    conex.modificarOferta(req.params.id, req.body)
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en la modificacion!');
            res.status(203).json({'success':false});
        })
}

module.exports = {
    verListadoOfertas,
    verOferta,
    crearOferta,
    eliminarOferta,
    actualizarOferta
}