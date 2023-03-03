//Realizado por Khattari
const { Router } = require('express');
const controlador = require('../controllers/adminController');
const router = Router();

router.get('/', controlador.verListadoUsers);
router.get('/empresas', controlador.verListadoEmpresas);
router.get('/empresas/:nif', controlador.verEmpresa);
router.post('/empresas/crear', controlador.crearEmpresa);

router.get('/alumnos', controlador.verListadoAlumnos);
router.get('/alumnos/:nif', controlador.verAlumno);

module.exports = router;