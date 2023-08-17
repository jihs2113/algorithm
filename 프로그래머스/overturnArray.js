//자연수를 뒤집어 배열로 만들기
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 return하는 함수를 구현

function solution(n) {
  let str = String(n);
  const nums = (arg) => Number(arg);
  const answer = Array.from(str, nums).sort((a, b) => b - a);
  return answer;
}
