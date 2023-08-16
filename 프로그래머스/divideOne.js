//나머지가 1이 되는 수 찾기
//n을 x로 나눈 나머지가 1이되도록 하는 가장 작은 자연수 x를 return하는 함수 구현

function solution(n) {
  let x = 1;
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
