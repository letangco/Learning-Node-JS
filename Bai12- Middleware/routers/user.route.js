var express = require('express');
var router = express.Router();

var validate = require('../validate/user.validate');

const controller = require('../controllers/user.controller');
// Trang chủ
router.get('/', controller.home);

// Hiển thị và tìm kiếm User
router.get('/users', controller.index);

// Thêm User
router.get('/users/add', controller.viewAdd);
// Middleware thiết lập module kiểm tra validate
router.post('/users/add', validate.postAdd, controller.postAdd);

// Xem thông tin Từng User
router.get('/users/:id', controller.viewUser);

// Xóa User

// Middleware
// Chạy middleware 1 trước khi middleware 2 chạy
// => middleware 1 chạy next() thì ms tiếp tục chuyển sang middleware 2 chạy
function middleware1(req, res, next) {
    console.log("middleware1");
    // next();
}
function middleware2(req, res, next) {
    console.log("middleware2");
    res.send("hello2");
}

router.get('/middleware', middleware1, middleware2);

module.exports = router;
