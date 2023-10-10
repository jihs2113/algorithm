//7의 개수
//array	          result
//[7, 77, 17]	    4
//배열에 속한 7의 개수를 구해라

function solution(array) {
    let answer = 0;
    for(let i of array){
        answer += (i+'').split('7').length-1;
    }
    return answer;
}

function solution(array) {
    return array.join('').split('7').length - 1;
}

function solution(array) {
    return array.join("").match(/7/g)?.length || 0;
}