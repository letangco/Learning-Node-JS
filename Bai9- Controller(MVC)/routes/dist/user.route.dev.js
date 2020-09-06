"use strict";

var express = require('express');

var router = express.Router();

var db = require('../db');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.get('/insert', controller.viewInsert);
router.post('/insert', controller.insert);
router.get('/:id', controller.viewUser);
module.exports = router;