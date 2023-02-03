const {Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router();
const mids = require("../middlewares/userMiddlewares");

router.get('/', controlador.rolesGet);

module.exports = router;