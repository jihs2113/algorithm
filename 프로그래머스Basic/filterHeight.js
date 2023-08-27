//머쓱이보다 키 큰 사람 구하기
//filter문 활용

function solution(array, height) {
    var answer = array.filter(v => v>height)
    return answer.length;
}