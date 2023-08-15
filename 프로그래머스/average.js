//평균 구하기
//정수를 담고 있는 배열 arr의 평균값을 return하는 함수를 구현

function solution(arr) {
    var answer = 0;
    arr.map((item) => {
    answer += item
    })
    answer = answer / arr.length
    return answer;
}
