//정수 내림차순으로 배치
//n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 return하는 함수를 구현

function solution(n) {
  var answer = 0;
  answer = Number(
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  console.log(answer);
  return answer;
}
