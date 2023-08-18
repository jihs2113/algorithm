//나누어 떨어지는 숫자 배열
//array의 각 element중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 return하는 함수를 구현

function solution(arr, divisor) {
  let result = [];

  arr.map((item) => {
    if (item % divisor === 0) {
      result.push(item);
    }
  });
  if (result.length === 0) result.push(-1);
  return result.sort();
}
