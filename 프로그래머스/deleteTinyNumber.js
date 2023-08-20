//제일 작은 수 제거하기
//정수를 저장한 배열 arr에서 가장 작은 수를 제거한 배열을 return하는 함수를 구현

function solution(arr) {
  var answer = [];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 2) return [-1];
  return arr;
}
