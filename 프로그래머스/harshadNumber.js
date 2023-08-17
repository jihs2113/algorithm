//하샤드 수 구하기
//x가 하샤드의 수이려면 x의 각 자릿수의 합으로 x를 나누었을때 0으로 떨어지는 수이다.

function solution(x) {
  let str = (x + "").split("");
  let nums = 0;
  str.map((item) => {
    nums += Number(item);
  });
  return x % nums === 0 ? true : false;
}
