//문자열 겹쳐쓰기
//문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성

//my_string	overwrite_string	s	result
//"He11oWor1d"	"lloWorl"	2	"HelloWorld"
//"Program29b8UYP"	"merS123"	7	"ProgrammerS123"

//예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 
//이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.


function solution(my_string, overwrite_string, s) {
    let result = "";
 for (let i = 0; i < my_string.length; i++) {
   if (i >= s && i < s + overwrite_string.length) {
     result += overwrite_string[i - s];
   } else {
     result += my_string[i];
   }
 }
 return result;
}

function solution(my_string, overwrite_string, s) {    
    return my_string.substring(0, s) + overwrite_string + my_string.substring(s + overwrite_string.length);
}


function solution(my_string, overwrite_string, s) {
    let a = my_string.split('');
    a.splice(s, overwrite_string.length, ...overwrite_string);
    return a.join('');
}