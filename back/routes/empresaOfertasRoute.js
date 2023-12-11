const { Router } = require('express');
const controlador = require('../controllers/empresaOfertasController');
const router = Router();

router.get('/:nif', controlador.getOfertasEmpresa);
router.get('/empresa/:id', controlador.getEmpresaAsignada);
router.get('/datosempresa/:id', controlador.getDatosEmpresaAsignada);

module.exports = router;