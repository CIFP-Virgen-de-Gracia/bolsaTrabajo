const { Router } = require('express');
const controlador = require('../controllers/authController');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const mids = require('../middlewares/ofertasMiddleware');
const uploads = require('../controllers/uploads');

router.post('/empresas/crear', /**[mids.esAdmin],*/
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

router.post('/alumnos/crear', /**[mids.esAdmin],*/
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

router.put('/activar/:nif', /**[mids.esAdmin],*/ controlador.activarUser);
router.post('/login', /**[mids.esAdmin],*/ controlador.verUser);
router.post('/upload', uploads.uploadFile, uploads.upload);
router.get('/upload/:path', uploads.mostrarImagen);
router.post('/image/:nif', controlador.actualizarImage);

module.exports = router;