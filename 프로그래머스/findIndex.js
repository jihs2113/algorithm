//서울에서 김서방 찾기
//String 배열 seoul에서 element중 Kim의 위치를 찾아 "김서방은 X에 있다"라는 값을 return하는 함수 구현

function solution(seoul) {
  var answer = "";
  const location = seoul.findIndex((obj) => obj === "Kim");
  answer = `김서방은 ${location}에 있다`;
  return answer;
}
