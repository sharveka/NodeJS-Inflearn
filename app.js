var express = require('express');
var app = express();

//정적파일 로드할 때 사용
app.use(express.static('public'));

//url을 치고 들어오면 get방식으로 접속
app.get('/',function(req,res){ //사용자가 home으로 접속하면 두번째 인자로 전달한 함수(callback)가 실행된다.
  res.send('Hello Home page');
});
//req : 사용자가 요청한 것과 관련된 정보를 담는 변수
//res : 사용자가 요청한 정보에 대한 응답에 대한 객체를 담는 변수 . res에는 send라는 함수가 포함되어 있다.

app.get('/login',function(req,res){ //사용자가 login이라는 경로로 접속하면 두번째 인자로 전달한 함수(callback)가 실행된다. - get이라는 method가 하는 일! <- router. routing
  res.send('Login Pls');
});
//Routing : 길찾기! 경로 정하기

app.get('/domain',function(req,res){
  res.send('<h2>Domain page</h2>');
});

app.get('/Saturday',function(req, res){
  res.send('<h1>Today is Saturday</h1>');
});

app.get('/dynamic',function(req,res){
  var lis='';
  for(var i =0;i<5;i++){
    lis = lis+'<li>coding</li>';
  }

  var output=`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello,Dynamic!
      <ul>
        ${lis}
      </ul>
    </body>
  </html> `;

  res.send(output);
})
//${} 는 변수!라는 것을 표현 ` ` <- 써야 가능

app.get('/route',function(req,res){
  res.send('Hello Router, <img src="/I.png">');
})

app.listen(3000,function(){ //listen성공, 3000port ->  callback함수로 화면에 무언가를 출력할 수 있다.
  console.log('Connected 300 port!');
});
