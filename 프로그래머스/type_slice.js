//크기가 작은 부분 문자열
//"3141592"   "271" => "271"의 number타입의 271보다 작은 숫자들을 비교
//부분적으로 문자열을 비교하여 그 값 보다 작은 값들의 갯수를 return하는 함수를 구현

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);

    if (+p >= +value) count++;
  }
  return count;
}
