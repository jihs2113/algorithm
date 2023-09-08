//중복 문자열 제거
//let a = 'people'   => 'peol'


function solution(my_string) {
    return [...new Set(my_string)].join('');
}