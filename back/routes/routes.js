const {Router } = require('express');
// const controlador = require('../controllers/bdController');
const userController=require('../controllers/userController');
const controladorAuth = require('../controllers/auth');
const router = Router();
const mid = require('../middlewares/pruebaMiddleware');
const midsJWT = require("../middlewares/validarJWT");
const midsRoles = require("../middlewares/validarRoles");

// router.get('/', controlador.verListado);
// router.get('/sequelize', controlador.verListadoSequelize);
router.get('/', userController.usuariosGet);
router.get('/:dni', userController.usuarioGet);
// router.post('/', userController.usuariosPost);
router.put('/:dni?', userController.usuariosPut);
router.delete('/:dni', userController.usuariosDelete);
// router.post('/login',[midsJWT.validarJWT, midsRoles.esUser] ,controladorAuth.login);
router.post('/login', controladorAuth.login);
router.post('/register', controladorAuth.register);
//-------------------------
router.get('/roles', userController.rolesGet);


module.exports = router;