//배열 길이 2의 거듭제곱으로 만들기


function solution(arr) {
    const length = arr.length;
    const totalLength = 2 ** Math.ceil(Math.log2(length));
    return [...arr, ...new Array(totalLength - length).fill(0)];
  }