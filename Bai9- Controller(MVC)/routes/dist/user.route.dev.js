"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.get('/insert', controller.viewInsert);
router.post('/insert', controller.insert);
router.get('/:id', controller.viewUser);
module.exports = router;