#!/usr/bin/node
  const log=console.log,
  usr=process.argv[2],
  pwd=process.argv[3];
  log('usr %s' ,usr,"pwd：%s" ,pwd);
  var str=usr+":"+pwd;
   var buf=new Buffer(str);
  console.log('uesr name and passwd',buf.toString());
   log('based64:%s',buf.toString('base64'))
   //将字符串转换成base64编码,hex编码
   log('hex:%s',buf.toString('hex'))
