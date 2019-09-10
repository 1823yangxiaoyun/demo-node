#!/usr/bin/node

/*const p =require('./02-export-function');

console.dir(module);
console.log(p);*/
/*const circle=require('./02-export-var');
console.log('r=10,circle area :%d',circle(10).area());*/


const circle=require('./02-export-object');
console.log('r=10,circle area :%d',circle.area(10));
