//배열의 원소만큼 추가하기
//arr = [5, 1, 4]
//result = [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
//원소값에 맞게 개수를 추가하여 return

function solution(arr) {
  var answer = [];

  arr.map((a) => {
    for (let i = 0; i < a; i++) {
      answer.push(a);
    }
  });

  return answer;
}

function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
