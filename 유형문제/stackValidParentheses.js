//주어진 괄호들이 올바른 밸런스를 가지고 있는지 확인
//순회적으로 프로세싱해주는데 열림은 스택에 넣고, 닫힌괄호가 나타나는 경우 스택에 쌓인 열림 괄호와 매칭 해보고 하나씩 체크하면 지워준다.

//"{}","[]","()"

function valid(input) {
  const stack = [];
  for (const char of input) {
    if (char === "{" || char === "{" || char === "(") {
      //열린 괄호인경우 stack으로 계속 쌓고
      stack.push(char);
    } else {
      //이제 닫힌 괄호인경우 pop으로 체크하면서 빼준다.
      const lastChar = stack.pop();
      if (
        (char === "}" && lastChar !== "{") ||
        (char === "]" && lastChar !== "[") ||
        (char === ")" && lastChar !== "(")
      ) {
        return false;
        //아닌경우 false를 출력한다.
      }
    }
  }
  return stack.length === 0;
  //길이가 0이되면 true false 값을 리턴한다.
}

console.log(valid("[)})]")); //false
console.log(valid("{([])}")); //true
console.log(valid("())")); //false
