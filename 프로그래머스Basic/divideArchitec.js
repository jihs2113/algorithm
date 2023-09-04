//외계 행성 나이
//a ~ j 까지 0~9까지 값을 맵핑하여 
//문자열에 맞게 숫자를 반환한다.

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}

function solution(age) {
  return age.toString().replace(/./g, (x) => "abcdefghij"[x]);
}
