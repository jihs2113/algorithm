//특별한 이차원 배열2
//let arr = [[5, 192, 33], [192, 72, 95], [33, 95, 999]];
//arr[i][k] === arr[k][i]이 조건이 맞으면 1 아니면 0을 return

function solution(arr) {
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] != arr[j][i]) {
        return 0;
      }
    }
  }

  return 1;
}

//every와 every(_,i)를 활용
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
