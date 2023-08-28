//n개 간격의 원소들
//정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return

function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}

function solution(num_list, n) {
  num_list.filter((v, idx) => !(idx % n));
}
