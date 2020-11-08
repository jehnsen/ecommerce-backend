const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category')
// const isAuth = require('../middleware/is-auth');

router.get('/', categoryController.getAllCategories);

router.get('/:id', categoryController.getCategoryById)

router.post('/',  categoryController.create) //isAuth

router.put('/', categoryController.update) //isAuth

router.delete('/:id', categoryController.delete) //isAuth

module.exports = router;