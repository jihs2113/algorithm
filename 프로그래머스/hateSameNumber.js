//같은 숫자는 싫어
//배열 arr의 각 원소는 숫자 0~9까지 이루어져있고
//연속적인 숫자는 하나만 남기고 전부 제거한다.

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}
