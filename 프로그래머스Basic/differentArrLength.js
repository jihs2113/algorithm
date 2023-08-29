//배열의 길이에 따라 다른 연산하기

const solution = (arr, n) =>
  arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
