//부족한 금액 계산하기
//등비수열로 price 3 count4이면  3 +6 +9 +12 = 총 지불 금액 30
//원래 이용료 price인 놀이기구를 N 번째 이용한다면 이용료의 N배를 받기로했다.
//놀이기구를 count번 타게되면 가지고있는 금액에서 얼마가 모자르는지 부족한 금액을 계산하여 return하는 함수를 구현

function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
    console.log(price);
  }
  answer = price - money;
  return result <= money ? 0 : result - money;
}
