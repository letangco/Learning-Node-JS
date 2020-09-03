var EventEmitter = require('events');
var util = require('util');

function DenTinHieu(LoaiDen) {
    this.LoaiDen = LoaiDen;
}

util.inherits(DenTinHieu, EventEmitter);

DenTinHieu.prototype.hieuLenh = function () {
    switch (this.LoaiDen) {
        case 'red':
            this.emit('stop');
            // console.log('Đèn đỏ, dừng lại!!!');
            break;
        case 'yellow':
            this.emit('slow');
            // console.log("Đèn vàng, đi chậm lại!!");
            break;
        case 'green':
            this.emit('go');
            // console.log("Đèn xanh, được phép đi");
            break;
        default:
            this.emit('err');
            // console.log("Không có loại đèn này!!!!");
            break;
    }
};

var dendo = new DenTinHieu('red');
var denvang = new DenTinHieu('yellow');
var denxanh = new DenTinHieu('green');

dendo.on('stop', dunglai);
denvang.on('slow', tocDo);
denxanh.on('go', duocPhepDi);

var tinhieu = { 1: "red", 2: "yellow", 3: "green" };
var tinhieuden = [1, 3, 2, 1,2,3,3,3,1,2,3,1];

for (var th of tinhieuden) {
    console.log("Tín hiệu đèn giao thông: ", tinhieu[th]);
    switch (tinhieu[th]) {
        case "red":
            dendo.hieuLenh();
            break;
        case "yellow":
            denvang.hieuLenh();
            break;
        case "green":
            denxanh.hieuLenh();
            break;
    }
}

function dunglai(){
    console.log('Đèn đỏ, dừng lại!!!');
}
function tocDo(){
    console.log("Đèn vàng, đi chậm lại!!");
}
function duocPhepDi(){
    console.log("Đèn xanh, được phép đi");
}