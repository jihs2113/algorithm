//카카오문제
//숫자 문자열과 영단어
// 영어와 숫자가 혼합되어있는 문자열을 단어로 각각 찾아서 숫자로 바꿔준 후 return하는 함수를 구현

function solution(s) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < arr.length; i++) {
    answer = answer.split(arr[i]).join(i);
  }
  return Number(answer);
}
