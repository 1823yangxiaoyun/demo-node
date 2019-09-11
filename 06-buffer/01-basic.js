#!/usr/bin/node
 const log=console.log;
  var buf1=new  Buffer(256);
  buf1[0]=11;
  log(buf1.length);
  log(buf1);
  var buf2=buf1.slice(250,256);
  log(buf2);


  for(var i=0;i<buf1.length;i++) buf1[i]=i;
  log(buf1);

  //填充
  buf1.fill(0,0,256)//给buff填充为0  
  var buf3=buf1.slice(250,256);
  log(buf3);
log(buf3.toJSON());
  //
  log(JSON.stringify(buf3));
  //
  ////数组实例化
  var arr = ['a',0xba,0xdf,0x00,255,10];
  //
  var buf4=new Buffer(arr);
  log(buf4);
  
  ////字符串实例化为Buffer
  var buf5= new Buffer('Hello world');
  log(buf5);
  //
  ////拷贝
  buf5.copy(buf4,0,0,buf4.length);
  log(buf4);
  log(buf5);
  var str='你好 world';
  var buf6=new Buffer(str);
  log(buf5.length);//字节数长度
  log(buf6.length);//字符串长度
