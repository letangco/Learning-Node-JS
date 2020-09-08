var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');
// Trang chủ
router.get('/',controller.home);

// Hiển thị và tìm kiếm User
router.get('/users', controller.index);

// Thêm User
router.get('/users/add', controller.viewAdd);

router.post('/users/add',controller.postAdd);

// Xem thông tin Từng User
router.get('/users/:id',controller.viewUser);

// Xóa User

module.exports = router;
