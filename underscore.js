const _ = require('underscore');
var arr=[3,6,9,1,12];

console.log(arr[0]);    //배열의 첫번째 원소 출력
console.log(_.first(arr)); //arrays.first

console.log(arr[arr.length-1]); //배열의 마지막 원소 출력
console.log(_.last(arr));       //arrays.last
