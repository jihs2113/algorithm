//인덱스 바꾸기
//구조분해할당을 활용하여 인덱스끼리의 value를 swap하여 return

function solution(my_string, num1, num2) {
    let arr = my_string.split("");
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join("");
  }