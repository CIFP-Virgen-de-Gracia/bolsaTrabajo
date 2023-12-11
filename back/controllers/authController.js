const {response,request} = require('express');
const Conexion = require('./Conexion/Conexion');
const ConexionSequelize = require('./Conexion/ConexionAdmin');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bolsatrabajok@gmail.com',
    pass: 'hrdb qqqx wkfy xelf'
  }
});

const verUser = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getUserMail(req.body.email)
        .then( msg => {
            if (msg[0].status == 1) {
                if (msg[0].password == req.body.password) {
                    console.log('Listado correcto!');
                    res.status(200).json({'success': true, 'rol': msg.rol, 'data': msg});
                }
               else {
                console.log('datos incorrectos');
                res.status(203).json({'success': false, 'msg':'datos incorrectos'});
               } 
            }
            else {
                console.log('usuario no activado');
                res.status(203).json({'success': false, 'msg':'ususario no activado'});
            }   
        })
        .catch( err => {
            console.log('No hay registro');
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

const crearAlumno = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.crearAlumno(req.body)
        .then( msg => {
            console.log('Insertado correctamente');
            var mailOptions = {
                from: 'bolsatrabajok@gmail.com',
                to: req.body.email,
                subject: 'Registro completado',
                html: 'Gracias por inscribirte en la bolsa de trabajo de CIFP Virgen de Gracia, activa tu usuario en el siguiente enlace: <a href="http://localhost:4200/activate/'+req.body.nif+'">localhost:4200/activate/user?='+req.body.email+'</a>'
              };
            sendMail = transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.status(201).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en el registro');
            res.status(203).json({'success':false});
        })
}

const activarUser = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.activarUser(req.params.nif)
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en la modificacion!');
            res.status(203).json({'success':false});
        })
}


const verDatosEmpresa = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getDatosEmpresa(req.params.nif)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const verDatosAlumno = (req, res = response) => {
    const conex = new ConexionSequelize();

    conex.getDatosAlumno(req.params.nif)
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro');
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const actualizarImage = (req = request, res = response) => {
    const conex = new ConexionSequelize();
    conex.modificarImage(req.params.nif, req.body.image)
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json({'success':true});
        })
        .catch( err => {
            console.log('Fallo en la modificacion!');
            res.status(203).json({'success':false, 'error': err});
        })
}

module.exports = {
    verEmpresa,
    crearEmpresa,
    verAlumno,
    crearAlumno,
    activarUser,
    verDatosEmpresa,
    verDatosAlumno,
    verUser,
    actualizarImage
}