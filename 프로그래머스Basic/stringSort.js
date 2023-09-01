//문자열 정렬하기(1)


function solution(my_string){
    return my_string.replaceAll(/[a-z]/g, "").split('').sort((a,b) => a-b);
}