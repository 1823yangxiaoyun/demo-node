#!/usr/bin/node

const fs= require('fs'),
      file =process.argv[2]|| __filename;
if(fs.existsSync(file)){
  console.log(fs.readFileSync(file).toString('utf8'));

}
else{
  console..error('不存在')；
    process.exit(1);
}
