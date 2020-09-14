var express = require('../node_modules/express');
var router = express.Router();
var multer  = require('multer');

var validate = require('../validate/user.validate');

const controller = require('../controllers/user.controller');

const authMiddleware = require('../middleware/auth.middleware');

var upload = multer({ dest: './public/uploads/' });

// Trang chủ
router.get('/', authMiddleware.requireAuth,controller.home);

// Hiển thị và tìm kiếm User
router.get('/users',authMiddleware.requireAuth, controller.index);

// Thêm User
router.get('/users/add', authMiddleware.requireAuth, controller.viewAdd);

// Middleware thiết lập module kiểm tra validate *****
// Middleware upload.single avatar phải trùng với tên name của html upload file
router.post('/users/add', upload.single('avatar'), authMiddleware.requireAuth, validate.postAdd, controller.postAdd);

// Xem thông tin Từng User
router.get('/users/:id',authMiddleware.requireAuth, controller.viewUser);

// Xóa User
router.get('/delete/:id',authMiddleware.requireAuth, controller.deleteUser);
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

// Cookies
router.get('/cookies',function(req,res,next){
    res.cookie('user-id', 123456);
    res.send("Cookies say Hello");
});


module.exports = router;
