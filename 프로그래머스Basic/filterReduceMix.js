//숨어있는 숫자 덧셈2
//let my_string = 'aAb1B2cC34oOp';
//1~1000사이의 숫자만 추출하여 다 더한 값을 return


//정규식과 reduce를 활용
//reduce 안에서 type을 number로 바꿔주고 초기값을 0을 넣어줘야한다.
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

