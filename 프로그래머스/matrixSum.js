//행렬의 덧셈
//행과 열의 크기가 같은 두 행렬의 같은 행과 같은 열의 값을 서로 더한 결과가 된다.

function solution(arr1, arr2) {
  var result = [];
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr1[0].length; k++) {
      answer.push(arr1[i][k] + arr2[i][k]);
    }
    result.push(answer);
    answer = [];
  }
  return result;
}
