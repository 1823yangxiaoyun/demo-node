#!/usr/bin/node
function longTask(){
  var num = 0;
  for(var i=0;i<1000;i++ ){
    for(var j=0;j<1000;j++){
      num += i*j;
    }
  }
  return num;

}

//记录时间
console.time('Time');
var n =longTask();
console.timeEnd('Time');//结束计时
console.log('n =%d',n);
