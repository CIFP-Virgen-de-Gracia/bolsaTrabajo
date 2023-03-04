const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const userController=require('../controllers/userController');
const controladorAuth = require('../controllers/auth');
const midsJWT = require("../middlewares/validarJWT");
const midsRoles = require("../middlewares/validarRoles");
const uploads = require('../controllers/uploads');
const router = Router();
//----------------------------
router.post('/login',[midsJWT.validarJWT],controladorAuth.login);
router.post('/loginGoogle',controladorAuth.loginGoogle);
router.post('/register', controladorAuth.register);
router.post('/logout', controladorAuth.logout);
router.get('/loginGoogle/callback', controladorAuth.loginGoogleCallback);
router.get('/renew', controladorAuth.renewToken);
router.post('/upload', uploads.uploadFile, uploads.upload);
router.get('/upload', uploads.uploadFile);
router.get('/upload/:id', uploads.uploadFile);
router.get('/getAvatar/:nif', userController.getAvatar);

//-------------------------
/* router.get('/roles', userController.rolesGet);
router.get('/roles/:nif', userController.rolesAsignadosNifGet); */
/* const {Router } = require('express'); */
const controlador = require('../controllers/bdController');
const mid = require('../middlewares/pruebaMiddleware');

router.get('/', controlador.verListado);

module.exports = router;