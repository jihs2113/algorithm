//주사위 개수 구하기
//가로 세로 높이 [10, 8, 6]
//모서리 길이 n = 3

function solution(box, n) {
  var answer = 0;

  var aa = parseInt(box[0] / n);
  var bb = parseInt(box[1] / n);
  var cc = parseInt(box[2] / n);

  return aa * bb * cc;
}

function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
