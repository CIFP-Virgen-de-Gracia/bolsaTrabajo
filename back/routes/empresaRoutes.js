const {Router } = require('express');
const controlador = require('../controllers/empresaController');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
//const mid = require("../middlewares/pruebaMiddleware");

router.get('/', controlador.empresasGet);
router.get('/:nif', controlador.empresaGet);
router.post('/', [
    check('nif').not().isEmpty(),
    check('nombre').not().isEmpty(),
    check('direccion').not().isEmpty(),
    check('contacto').not().isEmpty(),
    check('cargo').not().isEmpty(),
    validarCampos
],controlador.empresasPost);
router.put('/nif',[
    check('nif').not().isEmpty(),
    check('nombre').not().isEmpty(),
    check('direccion').not().isEmpty(),
    check('contacto').not().isEmpty(),
    check('cargo').not().isEmpty(),
    validarCampos
], controlador.empresasPut);
router.delete('/:nif', controlador.empresasDelete);



module.exports = router;