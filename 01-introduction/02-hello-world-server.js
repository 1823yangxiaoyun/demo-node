#!/usr/bin/node
const http = require('http');
<<<<<<< HEAD
http.createServer((req,res)=>{
  res.end('hello world');
}).listen(8080);
=======
http.createServer((req,res) =>
    {
      res.end('hello world');}
      ).listen(8080);
console.log("hello world");
>>>>>>> origin/master
