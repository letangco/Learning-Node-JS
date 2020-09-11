var express = require('express');
var router = express.Router();

const controller = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/products',authMiddleware.requireAuth, controller.showProduct);

module.exports = router;