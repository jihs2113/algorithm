//추억 점수 구하기
//배열 name의 각 이름에 해당하는 그리움점수 yearning이 있고 photo의 이중배열에서 이름에 맞게 그리움 점수를 합산하여 return하는 함수

//map 형식으로 셋업 후 reduce를 활용한 풀이방식
function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
}

//reduce 와 indexOf를 활용한 풀이방식
function solution(name, yearning, photo) {
  return photo.map((ele) =>
    ele.reduce((acc, value) => (acc += yearning[name.indexOf(value)] ?? 0), 0)
  );
}
