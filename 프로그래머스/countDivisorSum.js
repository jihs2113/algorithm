//약수의 개수와 덧셈
// 두정수 left에서 right까지의 모든 수들 중에서 약수의 개수가 짝수인 수는 더하고 홀수인 수는 뺀 수를 return

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let result = [];
    let index = 1;
    do {
      if (i % index === 0) {
        result.push(index);
      }
      index++;
    } while (index <= i);
    result.length % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
