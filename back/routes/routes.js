const {Router } = require('express');
const controlador = require('../controllers/bdController');
const router = Router();
const mid = require('../middlewares/pruebaMiddleware');

router.get('/', controlador.verListado);
router.get('/ofertas', controlador.verListadoOfertas);
router.post('/ofertas/crear', controlador.crearOferta);

module.exports = router;