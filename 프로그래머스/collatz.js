//콜라츠 추측
//주어진 수가 1이 될 떄까지 반복으로 작업하여 모든 수를 1로 만들수 있다는 추측

function solution(num) {
  var cnt = 0;
  while (num !== 1 && cnt !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
  }
  return num === 1 ? cnt : -1;
}
