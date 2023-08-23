//kakao 1차 비밀지도
//숫자를 2진법으로 바꿔서 한곳이라도 지나간 곳이면 1로 체크하여 "#"로 바꿔서 return하라

function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/1/gi, "#")
        .replace(/0/gi, " ")
    );
  }
  return answer;
}
