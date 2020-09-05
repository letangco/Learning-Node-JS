function Emitter(){
    this.ListEvent ={};
}

Emitter.prototype.on=function (type, listener){
    this.ListEvent[type] = this.ListEvent[type] || [];
    this.ListEvent[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.ListEvent[type]){
        this.ListEvent[type].forEach(event => {
            event();
        });
    }
}

module.exports = Emitter;