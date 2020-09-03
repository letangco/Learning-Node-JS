function Cat(weight){
    this.weight = weight;
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    mouse.die();
    this.stomach.push(mouse); 
}

module.exports = Cat;