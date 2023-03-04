const {Router } = require('express');
const controlador = require('../controllers/formContactoController');
const router = Router();
//const mid = require("../middlewares/pruebaMiddleware");

router.get('/', controlador.formContactosGet);
router.get('/:id', controlador.formContactoGet);
router.post('/', controlador.formContactoPost);
router.put('/:nif?', controlador.formContactoPut);
router.delete('/:nif', controlador.formContactoDelete);



module.exports = router;