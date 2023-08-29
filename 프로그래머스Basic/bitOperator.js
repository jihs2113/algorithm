//세균증식
//비트연산자

function solution(n, t) {
  return Math.pow(2, t) * n;
}

//비트 연산자를 활용  시프트 연산자
//4 << 2라면   4인 0100을  2비트 이동하여 0001 0000인 16이 나온다.
//2 << 10 = 2048이 나온다.
function solution(n, t) {
  return n << t;
}
