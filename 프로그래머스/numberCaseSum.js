//배열에서 2개를 뽑아 경우의수의 합을 배열로 담아 return하는 함수를 구현

function solution(numbers) {
  var answer = [];
  var result = [];
  let a = numbers.sort();
  for (let i = 0; i < a.length; i++) {
    for (let k = i + 1; k < a.length; k++) {
      answer.push(a[i] + a[k]);
    }
  }
  result = answer.sort((a, b) => a - b);
  let newResult = [...new Set(result)];
  return newResult;
}
