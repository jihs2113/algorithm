//n보다 커질 떄까지 더하기
//정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return

function solution(numbers, n) {
  return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
}

function solution(numbers, n) {
  var answer = 0;
  numbers.map((item) => {
    if (answer <= n) {
      answer += item;
    }
  });
  return answer;
}
