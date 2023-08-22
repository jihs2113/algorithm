//삼총사
//경우의수 구하기
// 배열 안에 각각의 정수 번호가 순서대로 있는 상황에서 각 el 3개를 더하여 0이 되는 경우의수를 구하라
//5개중 3개를 뽑는 모든 경우의수  = 5*4*3 / 3*2*1 = 총 10가지

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; ++i) {
    for (let j = i + 1; j < number.length - 1; ++j) {
      for (let k = j + 1; k < number.length; ++k) {
        if (number[i] + number[j] + number[k] == 0) ++answer;
      }
    }
  }
  return answer;
}
