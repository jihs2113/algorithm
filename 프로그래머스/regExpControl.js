//문자열 다루기 기본
//정규식 사용
//문자열 s의 길이가 4 혹은 6이고 숫자로만 구성되어있는지 체크

function solution(s) {
  var result = false;
  if ((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    result = true;
  }

  return result;
}
//
