const {Router } = require('express');
/* const mids = require("../middlewares/alumnoMiddlewares"); */
const controlador = require("../controllers/alumnoController")
const router = Router();

router.get('/:nif', controlador.alumnoGet);

 
module.exports = router;

