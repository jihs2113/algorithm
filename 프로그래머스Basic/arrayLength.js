//길이에 따른 연산
//정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((a, b) => a + b)
    : num_list.reduce((a, b) => a * b);
}

const solution = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
