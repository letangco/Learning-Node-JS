"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/product.controller');

var authMiddleware = require('../middleware/auth.middleware');

router.get('/products', controller.showProduct);
module.exports = router;