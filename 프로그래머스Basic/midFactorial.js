//구슬을 나누는 경우의수

//머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수

//balls	  share	  result
//3	        2	    3
//5	        3	    10
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
}

function solution(balls, share) {
    var result = 1;
    while(share > 0){
        result = result * balls / share;
        balls = balls - 1;
        share = share - 1;
    }
    return Math.round(result);
}

function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  );
}