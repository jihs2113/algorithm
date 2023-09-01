//가장 큰 수 찾기
//a 의 배열에서 가장 큰 수와 큰 수의 인덱스 값을 return 

function solution(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}