const express = require('express');
const router = express.Router();

const productController = require('../controllers/product')
// const isAuth = require('../middleware/is-auth');

router.get('/', productController.getAll);

router.get('/:id', productController.getById)

router.post('/',  productController.create) //isAuth

router.put('/', productController.update) //isAuth

router.delete('/:id', productController.delete) //isAuth

module.exports = router;