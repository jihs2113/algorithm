//2016년 윤년 요일 구하기
//const date = new Date(`2016-5-26`)
//date.getDay() => 요일을 index값으로 구할수있다.

//Date를 안쓴 경우

function solution(a, b) {
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let days = b;
  for (let i = 0; i < a - 1; i++) days += monthDay[i];

  return weekDay[days % 7];
}

//Date를 이용한 풀이
function getDayName(a, b) {
  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return arr[day];
}

console.log(getDayName(5, 24));
