#!/usr/bin/node
var fs =require('fs');

const http = require('http');

http.createServer((req,res)=>{
  if(req.url === 'favicon.ico') {return};
      var filename =__dirname+req.url;
      fs.createReadStream(filename).pipe(res);
}).listen(8080);

console.log(process.pid);
