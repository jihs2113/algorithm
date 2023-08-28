//n번째 원소부터 리스트의 마지막 원소까지를 return

function solution(num_list, n) {
  return num_list.filter((v, i) => i >= n - 1);
}

function solution(num_list, n) {
  return num_list.slice(n - 1);
}
