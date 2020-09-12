"use strict";

var _require = require('../node_modules/uuid/dist'),
    uuidv4 = _require.v4;

module.exports = function (req, res, next) {
  // Xảy ra khi người dùng không cần đăng nhập vào hệ thống cơ sở dữ liệu
  // Khi đó, tự động tạo ra một session id để thực hiện một phiên làm việc
  // Trường hợp này thường được sử dụng trong quá trình đặt một đơn hàng
  if (!req.signedCookies.sessionId) {
    res.cookie('sessionId', uuidv4(), {
      signed: true
    });
  }

  next();
};