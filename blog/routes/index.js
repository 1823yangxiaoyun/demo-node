var express = require('express');
var router = express.Router();
var data=require('./data.json');
router.use(express.static(__dirname));

router.get("/add",function(req,res){
  res.send(data);
})
router.get('/login', function(req, res) {
  res.type("text/html");
  res.status(200);
  res.sendFile(__dirname+'/login.html')
});
router.get('/list', function(req, res){
  var arr=data.users;
  // console.log(req.query);
  // console.log(arr[0].username);
  if(req.query.username ===arr[0].username && req.query.pwd===arr[0].password){
    res.type("text/html");
    res.status(200);
    res.sendFile(__dirname+'/list.html');
    return;
   }
  else{
    res.send("用户名或密码错误！！")
   }

});
module.exports = router;
