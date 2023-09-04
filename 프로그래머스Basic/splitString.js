//문자열 잘라서 정렬하기
//let a = "axbxcxdx";
//x문자를 기준으로 잘라서 정렬하기


function solution(myString) {
    return myString.split('x').sort().filter(v => v);
}