const { Router } = require('express');
const controlador = require('../controllers/ofertasController');
const router = Router();

router.get('/', controlador.verListadoOfertas);
router.get('/:id', controlador.verOferta);
router.post('/crear', controlador.crearOferta);
router.get('/empresa/:id', controlador.getEmpresaAsignada);
router.get('/empresa/datos/:id', controlador.getDatosEmpresaAsignada);

module.exports = router;