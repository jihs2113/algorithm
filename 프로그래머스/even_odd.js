//짝수와 홀수
//정수 num이 짝수일경우 even, 홀수인 경우 odd를 반환하는 함수를 구현

function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else answer = "Odd";
  return answer;
}
