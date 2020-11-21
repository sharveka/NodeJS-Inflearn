const http = require('http');
//http라는 모듈 요구! -> return 값을 http에 담는다.
//const : 상수! 할당된 값을 바꿀 수 없다.

const hostname='127.0.0.1';
const port=1338;

// createServer : 서버 만들기 -returns a new instance of http.Server
// createServer를 호출하면 http.Server라고 하는 객체를 리턴하는데, 그 객체는 listen이라고 하는 method를 가지고 있기 때문에 호출 가능!


// 첫번째 인자로 port=1337 전달
// hostname : 이 컴퓨터의 id
//127.0.0.1로 접속한 사용자에 대해 응답하라는 명령어! -> 결과는 hello world

// http.createServer((req,res)=>{
//   res.writeHead(200, {'Content-Type':'text/plain'});
//   res.end('Hello World\n');
// }).listen(port,hostname,()=>{
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//위 코드와 같다
var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World\n'); //response - hello world
});
server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});  //웹서버가 어떻게 들어온 사용자의 응답을 받을것인지 듣는다 / port번호, ip / listen <-시간이 걸림 -> 종료되었을 때 callback이 실행되도록 비동기적으로 작동
