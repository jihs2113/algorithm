//이상한 문자 만들기
//문자열 s는 한개 이상의 단어로 구성되어있는데 하나 이상의 공백은 유지하고
//각 단어의 짝수번째를 대문자, 홀수번째를 소문자로 바꾼 문자열을 return하는 함수를 구현
// "try hello world"   => 	"TrY HeLlO WoRlD"
function solution(s) {
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()))
        .join("")
    )
    .join(" ");
}
