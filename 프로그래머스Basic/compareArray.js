//배열 비교하기
//길이가 같은 경우 클때 1 작은때 -1 같을때 0을 return

function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let a = arr1.reduce((a, b) => a + b);
    let b = arr2.reduce((a, b) => a + b);
    return a > b ? 1 : a < b ? -1 : 0;
  }
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;
}
