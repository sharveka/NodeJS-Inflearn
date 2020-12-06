const express = require('express'); //express 모듈 사용 -> 웹 애플리케이션 구현
const bodyParser = require('body-Parser');
var fs=require('fs');         //file system을 제어할 수 있는 기본 모듈 사용 가능
var app = express();          //app이라는 객체를 만들어서 express가 리턴값을 저장하게 해줌
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true; //페이지 원본보기 했을 때 보기 편하게(줄바꿈) 만들어준다.

app.set('views','./views_file');
app.set('view engine','pug');

app.get('/topic/new',function(req,res){

  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
    }

  res.render('new',{topics:files});//new라는 이름의 템플릿을 쓸거야 -> new.pug
  });
});
app.get(['/topic','/topic/:id'],function(req,res){

  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
    }

  var id = req.params.id;
  if(id){ //id값이 있을 때
  fs.readFile('data/'+id,'utf8',function(err,data){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
    }
      res.render('view',{topics:files, title:id, description:data});  //readFile로 읽어온 정보는 callback function - data에 있다.
    });
  }

  else{   //id값이 없을 때
      res.render('view',{topics:files, title:'Welcome',description:'Hello, JavaScript for Server.'});
  }
});
});

// app.get('/topic/:id',function(req, res){  //id: 파일명
//   var id=req.params.id;
//   fs.readdir('data',function(err,files){
//     if(err){
//       console.log(err);
//       res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
//     }
//   //topic에 특정한 parameter를 가지고 들어오면, readdir을 통해서 data에 있는 파일 목록을 가져온다.
//
//   fs.readFile('data/'+id,'utf8',function(err,data){
//     if(err){
//       console.log(err);
//       res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
//     }
//       res.render('view',{topics:files, title:id, description:data});  //readFile로 읽어온 정보는 callback function - data에 있다.
//   });
// //readFile을 통해 id값에 해당하는 파일명의 내용을 읽어온다.
// })
// });

//cannot post/topic -> app_fils.js 가 받을 준비가 안되어있다! -> router필요
app.post('/topic',function(req,res){
  var title=req.body.title;
  var description=req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      res.status(500).send('Internal Server Error');  //500 : 서버 상의 오류
    }
    //error가 없다면
  res.redirect('/topic/'+title);  //callback함수가 실행된 이후 response를 할수 있다
});
});

// connect
app.listen(3000,function(){         //app이 특정 포트를 listen하게 해주기 -> 3000포트에 연결되면 callback함수가 호출되면서 문구를 띄운다.
    console.log('Connected 3000 port!');;
});
