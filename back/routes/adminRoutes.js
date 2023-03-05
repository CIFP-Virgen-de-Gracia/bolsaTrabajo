//Realizado por Khattari
const { Router } = require('express');
const controlador = require('../controllers/adminController');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const mids = require('../middlewares/ofertasMiddleware');

router.get('/empresas', [mids.esAdmin], controlador.verListadoEmpresas);
router.get('/empresas/:nif', [mids.esAdmin], controlador.verEmpresa);
router.post('/empresas/crear', [mids.esAdmin],
    [
        check('nif').not().isEmpty(),
        check('nombre').not().isEmpty(),
        check('password').not().isEmpty(),
        check('email').not().isEmpty(),
        check('telefono').not().isEmpty(),
        check('direccion').not().isEmpty(),
        check('contacto').not().isEmpty(),
        check('cargo').not().isEmpty(),
        validarCampos
    ]
    , controlador.crearEmpresa);
router.put('/empresas/modificar/:nif', [mids.esAdmin], controlador.actualizarEmpresa);

router.get('/alumnos', [mids.esAdmin], controlador.verListadoAlumnos);
router.get('/alumnos/:nif', [mids.esAdmin], controlador.verAlumno);
router.post('/alumnos/crear', [mids.esAdmin],
    [
        check('nif').not().isEmpty(),
        check('nombre').not().isEmpty(),
        check('password').not().isEmpty(),
        check('email').not().isEmpty(),
        check('telefono').not().isEmpty(),
        check('apellido1').not().isEmpty(),
        check('apellido2').not().isEmpty(),
        validarCampos
    ]
    , controlador.crearAlumno);
router.put('/alumnos/modificar/:nif', [mids.esAdmin], controlador.actualizarAlumno);

router.get('/admins', [mids.esAdmin], controlador.verListadoAdmins);
router.post('/admins/crear', [mids.esAdmin],
    [
        check('nif').not().isEmpty(),
        check('nombre').not().isEmpty(),
        check('password').not().isEmpty(),
        check('email').not().isEmpty(),
        check('telefono').not().isEmpty(),
        validarCampos
    ]
    , controlador.crearAdmin);
router.put('/admins/modificar/:nif', [mids.esAdmin], controlador.actualizarAdmin);

router.get('/', [mids.esAdmin], controlador.verListadoUsers);
router.delete('/eliminar/:nif', [mids.esAdmin], controlador.eliminarUser);
router.put('/activar/:nif', [mids.esAdmin], controlador.activarUser);

module.exports = router;