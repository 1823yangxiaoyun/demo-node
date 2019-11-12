var express = require('express');
var router = express.Router();
var data=require('./data.json');

router.get("/add",function(req,res){
  res.send(data);
})
router.get('/login', function(req, res) {
  res.render("login");
});
router.get('/list', function(req, res){
  var arr=data.users;
  // console.log(req.query);
  // console.log(arr[0].username);
  if(req.query.username ===arr[0].username && req.query.pwd===arr[0].password){
    res.render('list');
    return;
   }
  else{
    res.send("用户名或密码错误！！请重新登录")
   }

});
module.exports = router;
