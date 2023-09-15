//빈 배열에 추가 삭제하기
//let arr = [3, 2, 4, 1, 3];
//let flag = [true, false, true, false, false];
//true이면 arr인덱스 배열에 해당하는 값 곱하기2배를 추가, false면 arr인덱스 배열 해당 숫자만큼 맨뒤 를 지워준다.


function solution(arr, flag) {
    return arr.reduce(
      (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
      [],
    );
  }


function solution(arr, flag) {
    let answer = [];
    arr.forEach((n, i) => answer = flag[i] ? [...answer, ...new Array(n * 2).fill(n)] : [...answer.slice(0, -n)])
    return answer;
}