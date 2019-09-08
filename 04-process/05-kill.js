#!/usr/bin/node
//处理信号量 一个进程响应一个进程
//
var argv = process.argv;
//第一个参数进程ID ，第二个参数代表信号
process.kill(argv[2],argv[3]);

