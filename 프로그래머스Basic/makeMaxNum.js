//최댓값 만들기
//let a = [0, -31, 24, 10, 1, 9];
//a 배열에서 두 수의 곱중에 최대값을 return

function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b);

  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}
//정렬 한 다음 최대 양수끼리 곱과 최소 음수끼리 곱 중에 판별하여 return해준다.
