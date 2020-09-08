"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/user.controller'); // Hiển thị và tìm kiếm User


router.get('/', controller.index); // Thêm User

router.get('/add', controller.viewAdd);
router.post('/add', controller.postAdd); // Xem thông tin Từng User

router.get('/:id', controller.viewUser); // Xóa User

module.exports = router;