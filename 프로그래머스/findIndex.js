//서울에서 김서방 찾기
//String 배열 seoul에서 element중 Kim의 위치를 찾아 "김서방은 X에 있다"라는 값을 return하는 함수 구현

function solution(seoul) {
  var answer = "";
  const location = seoul.findIndex((obj) => obj === "Kim");
  answer = `김서방은 ${location}에 있다`;
  return answer;
}

//indexof와 findIndex의 차이점은
//indexof는 배열에서 원하는 특정 항목이 배열의 몇번쨰 원소인지 찾아 리턴 못찾으면 -1
//findIndex는 배열안에 있는 값이 객체이거나 특정값이 아닌 특정 조건으로 찾는거면 findIndex를 사용.
// const todos = [
// 	{
// 		id : 1,
// 		text : '자바스크립트 입문',
// 		done : true
// 	},
// 	{
// 		id : 2,
// 		text : '함수 배우기',
// 		done : true
// 	},
// ];
//const index = todos.indexOf(2);  // todos.findIndex((obj) => obj.id ===2)

//find
//반대로 index가 아닌 원소나 객체를 찾을경우
//todos.find((todo) => todo.done === true);
//Object{id:1,text:...,done:true} 2개가 해당되도 맨 처음 원소만 보여준다.
