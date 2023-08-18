//두 정수 사이의 합
//a,b사이에 속한 모든 정수의 합을 return하는 함수를 구현

function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
