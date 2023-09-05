//간단한 식 계산하기
// let a = "43 - 12";
//'-' '+' '*' 문자열에서 3개의 연산식에 따라서 값을 계산하여 return


function solution(binomial) {
    let arr = binomial.split(' ');
    if(arr[1] === '*') return Number(arr[0]) * Number(arr[2]);
    return arr[1] === '-' ? Number(arr[0]) - Number(arr[2]) : Number(arr[0]) + Number(arr[2]);
}

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}

//구조분해할당
function solution(binomial) {
    const [a,ex,b] = binomial.split(" ");    
    return (ex === "+")? +a+ +b : (ex === "-")? a - b : a*b
}