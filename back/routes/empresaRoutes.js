const {Router } = require('express');
const controlador = require('../controllers/empresaController');
const router = Router();
const mid = require("../middlewares/pruebaMiddleware");

router.get('/', controlador.empresasGet);
router.get('/:id', controlador.empresaGet);
router.post('/', controlador.empresasPost);
router.put('/:id', controlador.empresasPut);
router.delete('/:id', controlador.empresasDelete);



module.exports = router;