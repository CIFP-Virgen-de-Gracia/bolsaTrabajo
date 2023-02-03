const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const userController=require('../controllers/userController');
const controladorAuth = require('../controllers/auth');
const midsJWT = require("../middlewares/validarJWT");
const midsRoles = require("../middlewares/validarRoles");
const router = Router();

// router.get('/', userController.usuariosGet);
// router.get('/:nif', userController.usuarioGet);
// router.put('/:nif?', userController.usuariosPut);
// router.delete('/:nif', userController.usuariosDelete);
// router.post('/login',[midsJWT.validarJWT],controladorAuth.login);
router.post('/login',[midsRoles.esEstudiante], controladorAuth.login);
//TODO:ESTAS RUTAS DEBEN ESTAR EN AUTH y comprobar el rol del usuario con el middleware de roles
router.post('/register', controladorAuth.register);
router.post('/registerAdmin',[midsRoles.esAdmin], controladorAuth.registerAdmin);
router.post('/registerEmpresa',[midsRoles.esEmpresa], controladorAuth.registerEmpresa);
//-------------------------
router.get('/roles', userController.rolesGet);


module.exports = router;