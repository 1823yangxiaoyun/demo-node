#!/usr/bin/node
const user = {
  name :'王顶',
  age:40,
  qq:'2233888'
};
const log = console.log;

// %s %d %j
log('name:%s,age:%d',user.name,user.age);
log('JSON:%j',user);
//输出方式
log('qq：%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);
