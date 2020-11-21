var fs = require('fs');
//Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf-8'})   //읽을 때 utf-8방식으로 읽기
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt',{encoding:'utf-8'},function(err,data){
  console.log(3);
  console.log(data);
})
console.log(4);

//실행순서 2 ->4 -> 3 -> data (file을 읽는 작업은 시간이 걸린다)

// fs.readFile(path,[options],callback) - Async에만 callback이 들어간다
