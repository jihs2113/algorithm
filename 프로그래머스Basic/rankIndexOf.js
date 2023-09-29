//진료 순서정하기
//let a = [3, 76, 24];
//result = [3,1,2];
//숫자가 큰것부터 순서를 정해준다.


//배열을 다른 배열에 담아두고, 정렬한 후 map함수를 활용하여 원래 배열에서 새로운 배열의 값의 index를 return한다
function solution(emergency) {
    const rank = [...emergency];
    rank.sort((a, b) => b - a);
    return emergency.map(n => rank.indexOf(n) + 1);
}