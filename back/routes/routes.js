const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const userController=require('../controllers/userController'); //Habilito esto también
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

router.get('/', controlador.verListado);


//********************** */
//Inés: Creo aquí la ruta para usuarioEmpresaGet, que necesito 
//para formularioEmpresa. No quiero tocarte lo tuyo por si te lo estropeo.
router.get('/:nif', userController.usuarioEmpresaGet);
router.put('/:nif', userController.usuariosPut);
//********************** */


module.exports = router;