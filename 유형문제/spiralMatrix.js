//나선형 매트릭스
//2차원 배열 순회 문제
//m x n 사이즈의 매트릭스 엘리먼트를 나선형 모양으로 순회
//input:=[[1,2,3],[4,5,6],[7,8,9]]
//output=[1,2,3,6,9,8,7,4,5]
//123
//456
//789
//여기서 L=0 / R=m[0].length-1 / T=0 / B=m.length-1

// 접근 방법
//4곳의 코너 포인터를 각각 변수에 저장&초기화
//Top Left코너에서 시작, 첫번쨰 row 왼쪽 -> 오른쪽으로 순회. 순회 끝나면 Top 포인터+1 증가
//Right Top 코너에서 시작, 맨우측 위 ->아래로 순회. 순회끝나면 Right 포인터 -1 감소
//Right Bottom 코너에서 시작 맨우측 오른쪽 -> 왼쪽으로 순회. 순회후 Bottom 포인터 -1 감소
//Left 포인터에서 시작, 왼쪽 -> 오른쪽으로 순회. Left 포인터 + 1

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const test2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function matrix(value) {
  const result = [];

  let left = 0;
  let right = value[0].length - 1;
  let top = 0;
  let bottom = value.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(value[top][i]);
    } //맨 윗줄 순회 완료
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(value[i][right]);
    }
    right--;

    if (top <= bottom) {
      //top포지션이 밖으로 나가지않게 방지해준다.
      for (let i = right; i >= left; i--) {
        result.push(value[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      //left포지션이 밖으로 나가지않게 방지
      for (let i = bottom; i >= top; i--) {
        result.push(value[i][left]);
      }
      left++;
    }
  }
  return result;
}

console.log(matrix(test1));
console.log(matrix(test2));
