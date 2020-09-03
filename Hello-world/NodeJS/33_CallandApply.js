// call và apply thay đổi ngữ cảnh của từ khóa this.major
// Khác nhau là call truyền vào là các chuỗi được ngăn bởi dấu ,
// Tham số của apply là một mảng các chuỗi

var obj = {
    major : "information technology",
    sayMajor : function(para1, para2){
        console.log(this.major);
        console.log("parameter: ",para1,para2)
    }
};

obj.sayMajor("A","B");
obj.sayMajor.call({major:"accoutant"},"C","D");
obj.sayMajor.apply({major:"banker"},["E","F"]);