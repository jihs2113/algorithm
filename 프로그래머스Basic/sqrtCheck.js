//제곱수 판별하기
//sqrt 함수 활용하기

function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result.length % 2 === 0 ? 2 : 1;
}

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
