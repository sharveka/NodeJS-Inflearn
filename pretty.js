function hello(name){
  console.log('hi,'+name);
}
hello('egoing');

//cmd 창에서 uglifyjs pretty.js -> 줄바꿈, 띄어쓰기 등의 공백 싹 무시하고 한줄로 출력해준다.

//cmd 창에서 uglifyjs pretty.js -m -> name 이 o로 바뀌어 출력!
// -> m : mangle  -> 공백도 없애주고, 지역변수처럼 이름 바꿔도 상관 없는 변수들의 이름을 한 글자로 짧게 바꿔준다.

//cmd 창에서 : uglifyjs pretty.js -o uglified.js -m -> pretty.js 를 uglify 시킨 결과를 uglified.js에 저장해준다.
