//1로 만들기
//let a = [12, 4, 15, 1, 14];
//배열의 요소 값을 연산하여 1로 만들기까지의 연산 횟수를 각각 더한 총 합을 return
//정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 
//예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}