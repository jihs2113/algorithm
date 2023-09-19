//구간 병합하기
//let a = [[1,3],[2,6],[8,10],[15,18]];
//각 index의 끝과 시작의 원소 값이 같거나 그 숫자 보다 낮다면 하나로 병합해준다.
//[1,3] , [2,6] 인경우 [1.6]으로 1개로 병합해준다.

//그리디 알고리즘 활용

var merge = function (intervals) {
  if (intervals.length === 0) {
    return intervals;
  }
  if (intervals.length === 1) {
    return intervals;
  }

  //구간 시작시간 기준으로 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let values of intervals) {
    let pervious = result[result.length - 1];
    if (previous[1] >= values[0]) {
      //merge
      previous[1] = Math.max(previous[1], values[1]);
    } else result.push(values);
  }
  return result;
};
