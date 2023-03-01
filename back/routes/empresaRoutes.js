const {Router } = require('express');
const controlador = require('../controllers/empresaController');
const router = Router();
//const mid = require("../middlewares/pruebaMiddleware");

router.get('/', controlador.empresasGet);
router.get('/:nif', controlador.empresaGet);
router.post('/', controlador.empresasPost);
router.put('/:nif', controlador.empresasPut);
router.delete('/:nif', controlador.empresasDelete);



module.exports = router;