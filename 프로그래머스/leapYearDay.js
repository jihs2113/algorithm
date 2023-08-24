//2016년 윤년 요일 구하기
//const date = new Date(`2016-5-26`)
//date.getDay() => 요일을 index값으로 구할수있다.

//Date를 안쓴 경우
function days(a, b) {
  let answer = "";
  var arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var sums = 0;
  for (let i = 1; i < a; i++) {
    sums += monArr[i - 1];
  }
  answer = arr[(sums + b - 1) % 7];
  return answer;
}

//Date를 이용한 풀이
function getDayName(a, b) {
  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return arr[day];
}

console.log(getDayName(5, 24));
