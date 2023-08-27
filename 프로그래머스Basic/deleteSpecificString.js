//특정 문자 제거하기
//letter라는 변수의 특정 문자를 제거한다.

function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((v) => v !== letter)
    .join("");
}
