var express = require('express');
var router = express.Router();

const controller = require('../controller/products.controller');

router.get('/', controller.showProduct);

module.exports = router;