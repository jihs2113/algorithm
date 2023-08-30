//대문자와 소문자
//문자열에서 대문자는 소문자로 소문자는 대문자로 변환
//대문자 65 ~ 90
//소문자 97 ~ 122

function solution(my_string) {
  return my_string
    .split("")
    .map((item) => {
      return item.charCodeAt() < 91 ? item.toLowerCase() : item.toUpperCase();
    })
    .join("");
}

function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}
