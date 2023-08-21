//수박수박수박...의 패턴의 문자열에서 , but 문자열은 주어지지 않고
//n의 개수만 주어지며 n에 따라서 3이면 수박수 , 4면 수박수박과 같은 패턴을 찾아 return하는 함수를 구해라

function solution(n) {
  var answer = "";
  let a = "수";
  let b = "수박";
  if (n % 2 === 0) {
    return b.repeat(n / 2);
  } else {
    let c = Math.floor(n / 2);
    n === 1 ? (answer = a) : (answer = b.repeat(c) + a);
    return answer;
  }
}
