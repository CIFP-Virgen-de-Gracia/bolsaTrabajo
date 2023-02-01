const { Router } = require('express');
const controlador = require('../controllers/ofertasController');
const router = Router();

router.get('/', controlador.verListadoOfertas);
router.get('/:id', controlador.verOferta);
router.post('/crear', controlador.crearOferta);

module.exports = router;