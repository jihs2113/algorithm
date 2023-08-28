//숨어있는 숫자의 덧셈
//문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return

function solution(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .reduce((a, b) => a + Number(b), 0);
}
