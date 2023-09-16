//문자 뒤집기

//let a = "Progra21Sremm3";
//let s = 6;
//let e = 12;
//a의 s인덱스에서 e까지 문자열 부분만 뒤집어서 바꿔준 전체 문자열을 return


function solution(my_string, s, e) {
    return my_string.slice(0,s) + my_string.slice(s,e + 1).split("").reverse().join("") + my_string.slice(e + 1);
}


//자른 부분을 뒤집고 그 부분을 replace를 활용
function solution(my_string, s, e) {
    var answer = '';
    var str = my_string.substring(s,e+1);
    var newStr = str.split('').reverse().join('');

    answer = my_string.replace(str,newStr);
    return answer;
}