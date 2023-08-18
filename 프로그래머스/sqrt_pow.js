//정수 제곱근 판별
// n이 x의 제곱근이라면 x+1의 제곱근을 리턴하고 아니라면 -1을 return하는 함수를 구현

function solution(n) {
  var answer = 0;
  answer = Math.sqrt(n);
  if (answer % 1 === 0) {
    return Math.pow(answer + 1, 2);
  } else return -1;
}
