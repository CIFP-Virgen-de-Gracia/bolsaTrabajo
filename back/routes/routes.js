const {Router } = require('express');
const controlador = require('../controllers/bdController');
const router = Router();
const mid = require('../middlewares/pruebaMiddleware');

router.get('/', controlador.verListado); 
router.get('/sequelize', controlador.verListadoSequelize);

module.exports = router;