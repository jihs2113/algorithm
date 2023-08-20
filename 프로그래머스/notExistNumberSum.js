//없는 숫자 더하기
//배열에 없는 숫자들을 더하여 0~9의 합에서 뺀 값을 return

function solution(numbers) {
  var answer = 0;

  answer = 45 - numbers.reduce((a, b) => a + b);
  return answer;
}

//응용하여 0~9에 없는 값을 다른 배열로 return
//boolean으로  반환해주는 함수 includes와 some이 있다
//indexOf 와 findIndex처럼
//includes는 원시값만 찾을수있지만, some은 참조값 즉 객체 안에 값까지 전부 찾을수있다.

function solution(numbers) {
  let answer = [];
  for (let i = 0; i <= 9; i++) {
    let q = numbers.includes(i);
    if (!q) result.push(i);
  }
  return answer;
}
