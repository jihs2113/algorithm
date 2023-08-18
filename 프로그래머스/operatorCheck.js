//음양 더하기
//정수들의 절대값을 차례대로 담을 배열과 ture false로 + -를 구분한 배열을 매칭하여 모두 더한 수를 return하는 함수 구현

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] === false ? (result -= absolutes[i]) : (result += absolutes[i]);
  }
  return result;
}
