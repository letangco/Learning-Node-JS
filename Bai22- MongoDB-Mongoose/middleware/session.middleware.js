const { v4: uuidv4 } = require('../node_modules/uuid/dist');
const db = require('../db');

module.exports = (req,res,next)=>{
    // Xảy ra khi người dùng không cần đăng nhập vào hệ thống cơ sở dữ liệu
    // Khi đó, tự động tạo ra một session id để thực hiện một phiên làm việc
    // Trường hợp này thường được sử dụng trong quá trình đặt một đơn hàng
    if(!req.signedCookies.sessionId){
        var sessionId = uuidv4();
        res.cookie('sessionId',sessionId,{
            signed: true
        });
        db.get('sessions').push({
            id: sessionId
        }).write();
    }
    next();
}