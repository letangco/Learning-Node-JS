"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/card.controller');

router.get('/add/:productId', controller.addToCard);
module.exports = router;