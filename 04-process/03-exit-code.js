#!/usr/bin/node
//通过命令行传入一个参数，process.argv[2]就是这个参数
console.log('exit code:',process.argv[2]);
//把它作为退出码，用echo $?验证
process.exit(process.argv[2]);


