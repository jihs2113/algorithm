//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
//let a = "AbCdEFG";
//let b = "dE";
//a문자열에서 제일 마지막 요소의 b까지의 문자열을 return



function solution(myString, pat) {
    return myString.substring(0, myString.lastIndexOf(pat) + pat.length);
  }


  function solution(myString, pat) {
    let result = '';
    let last = myString.lastIndexOf(pat) + pat.length;

    result = myString.substr(0, last);

    return result;
}

