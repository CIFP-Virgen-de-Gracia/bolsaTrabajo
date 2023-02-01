const { Router } = require('express');
const controlador = require('../controllers/ofertasController');
const router = Router();

router.get('/', controlador.verListadoOfertas);
router.post('/crear', controlador.crearOferta);

module.exports = router;