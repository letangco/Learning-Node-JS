var mouse ={
    weight: 0.2,
    getWeight: function (){
        return this.weight;
    }
}

// constructor Function
function Mouse(color, weight){
    this.type = "mouse",
    this.color = color,
    this.weight = weight;
}
// prototype cua ham Mouse()
console.log(Mouse.prototype.constructor === Mouse);

Mouse.prototype.sleep = function(){
    console.log(this.color+ " mouse is "+"Sleeping zzzz...");
};

// Tao Method sleep thong qua tu khoa new
var mickey = new Mouse('yellow', 10);
mickey.sleep();

// KHong can khai bao lai khi tao moi doi tuong
var jerry = new Mouse ('blue', 30);
jerry.sleep();