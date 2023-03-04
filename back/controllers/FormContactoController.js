const {response,request} = require('express');
const Conexion = require('./Conexion/ConexionFormContacto');

const formContactosGet =  (req, res = response) => {
    const conx = new Conexion();

    conx.getFormContactoListado()    
        .then( msg => {
            console.log('Listado de Formularios correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const formContactoGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getFormContacto(req.params.id)    
        .then( msg => {
            console.log('Listado de formulario correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el formulario'});
        });
}

const formContactoPost =  (req = request, res = response) => {
    const conx = new Conexion();
    
    conx.registrarFormContacto(req.body)    
        .then( msg => {
            console.log('Formulario insertado correctamente!');
            res.status(201).json(msg);
        })
        .catch( err => {
            console.log('Fallo en la inserción del formulario!');
            res.status(203).json(err);
        });
}

const formContactoPut = (req = request, res = response) => {
    const conx = new Conexion();

    conx.modificarFormContacto(req.params.id, req.body)
        .then( msg => {
            console.log("Formulario modificado con exito");
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Error en la modificación.');
            res.status(203).json(err);
        });
}

const formContactoDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarFormContacto(req.params.id)    
        .then( msg => {
            console.log('Formulario borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}


module.exports = {
    formContactosGet,
    formContactoGet,
    formContactoPost,
    formContactoPut,
    formContactoDelete
}