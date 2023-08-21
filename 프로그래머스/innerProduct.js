//내적 구하기
//1차원 정수 배열 a,b의 내적을 구해라

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
