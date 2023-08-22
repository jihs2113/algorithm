//예산 구하기
//정해진 예산에 맞춰 각 부서에서 요청한 금액에 맞춰 최대한 몇개의 부서에 물품을 지원할수있는지 return하는 함수를 구현

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
