//이어 붙인 수
//정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return

function solution(num_list) {
  let a = Number(num_list.filter((x) => x % 2 === 0).join(""));
  let b = Number(num_list.filter((x) => x % 2 !== 0).join(""));
  return a + b;
}
