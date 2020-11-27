var express = require('express');
var bodyParser=require('body-parser');
var app = express();
app.set('view engine','pug');  //pug라는 템플릿 엔진과 framework인 express를 연결하는 코드
app.set('views','./html');

app.locals.pretty=true; //페이지 원본보기 했을 때 보기 편하게 만들어준다.

//정적파일 로드할 때 사용
app.use(express.static('public'));

//app.use : 모듈을 붙인다-정도로 이해/ bodyParser가 사용자 요청이 들어오면 동작. post방식으로 전송한 데이터를 사용할 수 있도록 해준다.
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/form',function(req,res){
  res.render('form');
});

app.get('/form_receiver',function(req,res){

  var title=req.query.title;
  var description=req.query.description;
  res.send(title+', '+description);

})

app.post('/form_receiver',function(req,res){
  var title=req.body.title;
  var description=req.body.description; //bodyParser모듈을 추가해서 -> req.가 원래 가지고 있지 않던 body라는 객체를 추가.

  res.send(title+', '+description);
})


app.get('/topic/:id',function(req,res){ //req : 사람의 요청 //res : app의 반응
  //res.send(req.query.id); //req.query.id 를 보내준다. -> localhost:3000/topic?id=1000 -> 인터넷 화면에 1000이 출력된다!
  //res.send(req.query.id+', '+req.query.name); //?id=100&name=egoing 형태로 입력

  var topics=[
    'Javascript is ...',
    'Nodejs is...',
    'Express is ..'
  ];
  var output = `
    <a href='/topic/0'>Javascript</a><br>
    <a href='/topic/1'>Nodejs</a><br>
    <a href='/topic/2'>Express</a><br><br>
    ${topics[req.params.id]}
  `
  res.send(output);
});
//-br 줄바꿈
// <a> : anchor. 정박지. 닻 - 혼자 사용하지 않고 다른 속성과 함께 사용
// herf : hypertext reference. 연결할 주소 지정하는 속성 href='' 따옴표를 빠뜨리지 말자


// app.get('/topic',function(req,res){ //req : 사람의 요청 //res : app의 반응
//   //res.send(req.query.id); //req.query.id 를 보내준다. -> localhost:3000/topic?id=1000 -> 인터넷 화면에 1000이 출력된다!
//   //res.send(req.query.id+', '+req.query.name); //?id=100&name=egoing 형태로 입력
//
//   var topics=[
//     'Javascript is ...',
//     'Nodejs is...',
//     'Express is ..'
//   ];
//   var output = `
//     <a href='/topic?id=0'>Javascript</a><br>
//     <a href='/topic?id=1'>Nodejs</a><br>
//     <a href='/topic?id=2'>Express</a><br><br>
//     ${topics[req.query.id]}
//   `
//   res.send(output);
// });
app.get('/topic/:id/:mode',function(req,res){
  res.send(req.params.id+', '+req.params.mode)
})  //topic/100/new -> 100, new 출력

app.get('/template',function(req,res){
  res.render('temp',{time:Date(),title:'Jade'})   //time이라는 키에 hello라는 값을 넣는다
});
//render : HTML, JS 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력하는 과정


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
  console.log('Connected 3000 port!');
});
