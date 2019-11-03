window.onload=function(){
    var username = document.getElementById('username');
    var pwd = document.getElementById('pwd');
    var login = document.getElementById('login');
    var item = {};
    login.onclick=function(){
        item.username = username.value;
        item.pwd = pwd.value;
        item = JSON.stringify(item)
        fetch('http://localhost:8083/login',
            {method:'POST',
            body:item,
          headers:new Headers({
            'Content-Type':'application/json'
          })
          })
        .then(res=>{
            if(res.status === 200){
              window.location = 'http://localhost:8083/addChapter/'
            }else{
             alert("输入错误！请重新输入！")
            }
            
          })

    }
}