//문자열 내 p와 y의 개수
//대소문자 구분없이 서로 비교하여 p와 y개수를 비교하여 같으면 true 틀리면 false를 return하는 함수 구현

function solution(s) {
  var answer = true;
  s = s.split("");
  let a = 0;
  let b = 0;
  s.map((item) => {
    if (item === "p" || item === "P") {
      a++;
    }
    if (item === "y" || item === "Y") {
      b++;
    }
  });
  return a === b ? true : false;
}
