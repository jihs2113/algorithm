//n개 만큼의 x등차수열
//x만큼 간격이 있는 n개의 숫자
//x와 n을 입력 받아 x부터 시작해 x씩 증가하는 숫자를 n개 지니는 인스턴스를 return하는 함수 구현

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
