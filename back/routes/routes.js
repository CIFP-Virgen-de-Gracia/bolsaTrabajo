//Ines Rutas
const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const userController=require('../controllers/userController'); //Habilito esto también
const controladorAuth = require('../controllers/auth');
const midsJWT = require("../middlewares/validarJWT");
const midsRoles = require("../middlewares/validarRoles");
const uploads = require('../controllers/uploads');
const router = Router();
//----------------------------
router.post('/login',[midsJWT.validarJWT],[midsRoles.esEstudiante, midsRoles.esEmpresa, midsRoles.esAdmin],controladorAuth.login);
router.post('/loginGoogle',controladorAuth.loginGoogle);
router.post('/register', controladorAuth.register);
router.post('/logout', controladorAuth.logout);
router.get('/loginGoogle/callback', controladorAuth.loginGoogleCallback);
router.get('/renew', controladorAuth.renewToken);
router.get('/rolesGet/:nif', userController.rolesAsignadosNifGet);
router.post('/upload', uploads.uploadFile, uploads.upload);
router.get('/upload', uploads.uploadFile);
router.get('/upload/:id', uploads.uploadFile);
router.get('/getAvatar/:nif',userController.getAvatar);

//-------------------------
/* router.get('/roles', userController.rolesGet);
router.get('/roles/:nif', userController.rolesAsignadosNifGet); */
/* const {Router } = require('express'); */
const controlador = require('../controllers/bdController');
const mid = require('../middlewares/pruebaMiddleware');

//router.get('/', controlador.verListado);


//********************** */
//Inés: Creo aquí la ruta para usuarioEmpresaGet, que necesito 
//para formularioEmpresa. No quiero tocarte lo tuyo por si te lo estropeo.
router.get('/:nif', userController.usuarioEmpresaGet);
router.get('/', userController.usuariosGet);
router.put('/:nif', userController.usuariosPut);
//********************** */


module.exports = router;