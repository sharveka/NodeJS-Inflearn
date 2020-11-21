var a=[3,1,2];

//callback 함수 - 누군가에 의해 호출당할 함수 b
function b(v1,v2){
  //console.log('c',v1,v2);
  return v2-v1;   //v1-v2 면 오름차순 정렬
}

//a.sort(b);
a.sort(function(v1,v2){
  return v2-v1;
});

console.log(a);
