var express = require('express');
var router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/', controller.showProduct);

router.post('/', controller.createProduct);

router.put('/:id', controller.updateProduct);

module.exports = router;