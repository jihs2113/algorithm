//가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수를 return해라
//홀수면 가운데, 짝수면 가운데 글자 2개를 반환

function solution(s) {
  var answer = "";
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
