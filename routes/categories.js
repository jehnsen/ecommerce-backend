const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category')
const auth = require('../middlewares/auth');

router.get('/', categoryController.getAllCategories);

router.get('/:id', categoryController.getCategoryById)

router.post('/', auth, categoryController.create)

router.put('/', auth, categoryController.update)

router.delete('/:id', auth, categoryController.delete)

module.exports = router;