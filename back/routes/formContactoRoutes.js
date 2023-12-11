const {Router } = require('express');
const controlador = require('../controllers/formContactoController');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
//const mid = require("../middlewares/pruebaMiddleware");

router.get('/', controlador.formContactosGet);
router.get('/:id', controlador.formContactoGet);
router.post('/', controlador.formContactoPost);
router.put('/:nif', 
    [
        check('nombre').not().isEmpty(),
        check('email').not().isEmpty(),
        check('telefono').not().isEmpty(),
        check('observaciones').not().isEmpty(),
        validarCampos
    ], controlador.formContactoPut);
router.delete('/:nif', controlador.formContactoDelete);



module.exports = router;