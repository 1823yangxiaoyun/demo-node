#!/usr/bin/node
const log =console.log;
//进程 无需使用require()
log('CPU',process.arch);
log('OS',process.platform);
log('PID',process.pid);//进程ID
log('execPath',process.execPath);//打印可执行文件的绝对路径信息

//process.stdin.on('data',function(data){
  //log(data);
 //});


log('node.js ver',process.version);//打印node.js版本信息
log('uid',process.pid);//打印当前登陆用户的id信息
log('gid',process.getgid());
log('cwd',process.cwd());

log('rss',process.memoryUsage.rss);
log('heaptotal',process.memoryUsage().heapUsed);
