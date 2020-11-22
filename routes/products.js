const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const productController = require('../controllers/product')
// const isAuth = require('../middleware/is-auth');

router.get('/', productController.getAll);

router.get('/:id', productController.getById)

router.get('/categories/:code', productController.getByCategory);

router.post('/search', productController.search);

router.post('/',  auth, productController.create)

router.put('/', auth, productController.update)

router.delete('/:id', auth, productController.delete)

module.exports = router;