#!/usr/bin/node
var fs=require('fs');

const http = require('http');
  
http.createServer((req, res) => {
    log('==========');
      log(req.headers);

        var file = __dirname + req.url;
        fs.readFile(file, (err, data) => {
          if(err) {
                  log(err.message);
                        res.statusCode = 404;
                              res.end(err.message);
                                  
          } else {
                  res.end(data);
                      
          }
            
        });

}).listen(8080);

console.log(process.pid);
