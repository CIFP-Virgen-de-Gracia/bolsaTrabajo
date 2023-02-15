//Realizado por Khattari
const { Router } = require('express');
const controlador = require('../controllers/ofertasController');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { empresaExiste } = require('../helpers/db-validators');

router.get('/', controlador.verListadoOfertas);
router.get('/:id', controlador.verOferta);
router.post('/crear',
    [
        check('titulo').not().isEmpty(),
        check('descripcion').not().isEmpty(),
        check('lugar').not().isEmpty(),
        check('presencial').not().isEmpty(),
        check('jornada').not().isEmpty(),
        check('nif_empresa').custom(empresaExiste),
        validarCampos
    ]
    ,controlador.crearOferta);
router.delete('/:id', controlador.eliminarOferta);
router.put('/modificar/:id', 
    [
        check('titulo').not().isEmpty(),
        check('descripcion').not().isEmpty(),
        check('lugar').not().isEmpty(),
        check('presencial').not().isEmpty(),
        check('jornada').not().isEmpty()
    ],
    controlador.actualizarOferta);

module.exports = router;