const {Router} = require('express');
const {getAutos, postAutos} = require('../controllers/autos')
const {getConceptoAutos, postConceptoAutos} = require('../controllers/concepto.Autos')
const router = Router();

router.get('/', getAutos);
router.post('/', postAutos);
router.post('/concepto', postConceptoAutos)
router.get('/concepto', getConceptoAutos);


module.exports = router;