#!/usr/bin/node
const log = console.log,
      arg = process.argv[2],
      arg1=process.argv[3] ,
      fs=require('fs'),
      dir=__dirname;
if(arg== 'list' ){
      log('[');
      const arr=fs.readdirSync(dir);
      for(var i=0; i < arr.length;i++){
        log('{"fileName":'+arr[i]+',"fileSize":"'+fs.statSync(dir+'/'+arr[i]).size+'"}');
      }
      log(']');
}
else if(arg=='mkdir' ){
  fs.mkdir(arg1,err=>{
    if(err){
      console.err("error");
      process.exit(1);
    }           
  });    
}
else{
  log("命令行输入参数错误！");
}

