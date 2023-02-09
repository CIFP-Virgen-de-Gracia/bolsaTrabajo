const { Router } = require('express');
const controlador = require('../controllers/ofertasController');
const router = Router();
const { check } = require('express-validator');

router.get('/', controlador.verListadoOfertas);
router.get('/:id', controlador.verOferta);
router.post('/crear',
    [
        check('titulo').not().isEmpty(),
        check('descripcion').not().isEmpty(),
        check('lugar').not().isEmpty(),
        check('presencial').not().isEmpty(),
        check('jornada').not().isEmpty(),
    ]
    ,controlador.crearOferta);
router.delete('/:id', controlador.eliminarOferta);
router.put('/modificar/:id', controlador.actualizarOferta);

module.exports = router;