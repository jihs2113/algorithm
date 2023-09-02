//x 사이의 개수
//문자열에서 x사이의 간격을 숫자로 반환
//let myString = "oxooxoxxox"	result = [1, 2, 1, 0, 1, 0]


function solution(myString) {
    return myString.split("x").map(a => a.length)
}