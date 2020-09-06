"use strict";

var express = require('express');

var router = express.Router();

var db = require('../db');

var controller = require('../controllers/user.controller'); // Load trang index 


router.get('/', controller.index); // Load view Insert

router.get('/insert', controller.viewInsert); // Thêm user

router.post('/insert', controller.insert); // View User on Click

router.get('/:id', viewUser);
module.exports = router;