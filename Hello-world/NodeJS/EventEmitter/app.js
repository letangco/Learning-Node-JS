const Emitter = require('./EventEmitter');
var eventConfig =  require('./config');
var emitter = new Emitter();

emitter.on("Gioi",function(){
    console.log("Điểm cao cần tuyên dương");
});

emitter.on("Kha", function(){
    console.log("Điểm khá, cần cố gắng hơn");
});

emitter.on("TB", function(){
    console.log("Điểm Trung bình - Yếu, cần báo cáo cho phụ huynh!!!");
});

var scores = [10,8,6,7,9,6.5,7.8,8.5,4.5,2,9.6,-10];
scores.forEach(score => {
    if(score >= 8)
    {
        console.log("Học lực Giỏi - ",score);
        emitter.emit(eventConfig.events.GOOD_SCORE);
        console.log("---------------------------");
    }
    else if(score >=6.5&& score <8)
    {
        console.log("Học lực Khá - ",score);
        emitter.emit(eventConfig.events.MEDIUM_SCORE);
        console.log("---------------------------");
    }
    else if(score < 6.5&& score >=0){
        console.log("Học lực Trung bình/ Yếu - ",score);
        emitter.emit(eventConfig.events.BAD_SCORE);
        console.log("---------------------------");
    }
    else {
        console.log("Điểm lỗi - ",score);
        console.log("---------------------------");
    }
});