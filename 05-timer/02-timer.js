#!/usr/bin/node

console.log('start');

var timeID = setInterval(loop,500);
var count = 0;
/*function loop(){
    count++;
      console.log('gogogo!');
      if(6 === count){
            clearInterval(timeID);
              
      }

}*/

function loop(){
  console.log('go again!')
}

setTimeout(function(){
  clearInterval(timeID)
},3000);




