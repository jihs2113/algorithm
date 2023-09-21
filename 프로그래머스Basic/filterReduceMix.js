//숨어있는 숫자 덧셈2
//let my_string = 'aAb1B2cC34oOp';
//1~1000사이의 숫자만 추출하여 다 더한 값을 return

function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

