//각각 자릿수 더하기
//자연수 N이 주어지면 자릿수의 합을 구해서 return하는 함수를 구현

function solution(n) {
  var answer = 0;
  return (n + "").split("").reduce((a, b) => a + parseInt(b), 0);
}
