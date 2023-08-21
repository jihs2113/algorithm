//문자열 내림차순으로 배치하기
//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 return하는 함수를 구현
//s는 영문 대소문자로만 구성되어있고, 대문자는 소문자보다 작은것으로 간주한다.

function solution(s) {
  var answer = "";
  return s.split("").sort().reverse().join("");
}
