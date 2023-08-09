//최대 수익 계산하기

// n기간 동안 주식가격 변화 기준으로 가장 큰 수익 계산하기.
// input  = [100, 200, 50, 30, 150, 250];
// 두가지 변수 초기화
// maxProfit = 0;
// minPrice = input[0];
// 매회 반복마다 조건문 걸기
// 두가지 결정
// 현재 가격이 minPrice보다 클때
// 현재 가격이 minPrice보다 작을때
// maxProfit 값 리턴. -->

// 내가 짠 코드
const arr = [100, 200, 50, 30, 150, 250];
let maxp = 0;
let minp = arr[0];
const q = Math.max(...arr); //250
const w = Math.min(...arr); //30

for (var i = 1; i < arr.length; i++) {
  if (minp < arr[i]) {
    maxp = arr[i];
  } else minp = arr[i];
}

console.log(`aaa ${maxp}`);
console.log(minp);

// 코드
function maxProfit(prices) {
  let maxP = 0;
  let minP = prices[0];

  for (let price of prices) {
    if (minP < price) {
      maxP = Math.max(maxP, price - minP);
    } else minP = price;
  }
  return maxP;
}

const test1 = [10, 20, 50, 100, 80, 250];
const test2 = [150, 80, 60, 50, 30];
console.log(maxProfit(test1));
console.log(maxProfit(test2));
