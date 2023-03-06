const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const controladorAuth = require('../controllers/auth');
const subirAvatar = require('../controllers/avatar');
const midsJWT = require("../middlewares/validarJWT");
const midsRoles = require("../middlewares/validarRoles");

const router = Router();
//----------------------------
router.post('/login',[midsJWT.validarJWT],controladorAuth.login);
router.post('/loginGoogle',controladorAuth.loginGoogle);
router.post('/register', controladorAuth.register);
router.post('/logout', controladorAuth.logout);
router.post ('/avatar', subirAvatar.subirAvatar);
router.post('/registerAdmin',[midsRoles.esAdmin], controladorAuth.registerAdmin);
router.post('/registerEmpresa',[midsRoles.esEmpresa], controladorAuth.registerEmpresa);

//-------------------------
/* router.get('/roles', userController.rolesGet);
router.get('/roles/:nif', userController.rolesAsignadosNifGet); */
/* const {Router } = require('express'); */
const controlador = require('../controllers/bdController');
const mid = require('../middlewares/pruebaMiddleware');

//router.get('/', controlador.verListado);





// ---->>>>>Añadido por Manuel
//Constantes para las rutas y validar 
const userController=require('../controllers/userController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
//********************************************************** */
//Inés: Creo aquí las ruta para usuarioEmpresaGet y otros métodos que necesito 
//para formularioEmpresa y listados. No quiero tocarte lo tuyo por si te lo estropeo.
router.get('/:nif', userController.usuarioEmpresaGet);
router.get('/', userController.usuariosGet);
router.put('/nif', 
    [
        check('email').not().isEmpty(),
        check('password').not().isEmpty(),
        check('telefono').not().isEmpty(),
        validarCampos
    ],
    userController.usuariosPut);
//********************** */


module.exports = router;