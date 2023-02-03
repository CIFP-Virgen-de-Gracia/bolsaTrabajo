const {Router } = require('express');
const controlador = require('../controllers/bdController');
const router = Router();
const mid = require('../middlewares/pruebaMiddleware');

router.get('/', controlador.verListado); 

module.exports = router;