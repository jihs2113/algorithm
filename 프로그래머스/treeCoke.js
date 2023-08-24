//콜라 문제
//콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
//단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.
//a : 마트에 줘야하는 병의 개수 / b : 마트에서 돌려주는 병의 개수 / n : 가진 총 빈 병의 개수

//재귀적 풀이
function solution(a, b, n) {
  if (n < a) return 0;
  const news = Math.floor(n / a) * b;

  return news + solution(a, b, news + (n % a));
}

//스택오버플로우에 대한 while문 풀이
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const news = Math.floor(n / a) * b;
    answer += news;
    n = news + (n % a);
  }
  return answer;
}
