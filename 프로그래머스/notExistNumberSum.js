//없는 숫자 더하기

function solution(numbers) {
    var answer = 0;
 
    answer = 45 - numbers.reduce((a,b) => a+b)
    return answer;
}