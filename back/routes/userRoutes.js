const {Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/', controlador.usuariosGet);

module.exports = router;