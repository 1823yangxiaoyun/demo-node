#!/usr/bin/node
//argv属性返回一个数组，其中包含启动nodejs进程时传入的命令参数
//其他参数是任何其他命令行的参数
//
//
console.log(process.argv.length);
console.log(process.argv);
var argv=process.argv;
var expression =process.argv[2];

console.log(expression+'='+'%d',eval(expression));
