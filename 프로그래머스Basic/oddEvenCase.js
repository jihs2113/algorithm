//배열에서 문자열 대소문자 변환하기
//strArr = ["AAA","BBB","CCC","DDD"]
//result = ["aaa","BBB","ccc","DDD"]

function solution(strArr) {
  return strArr.map((str, i) =>
    i % 2 === 1 ? str.toUpperCase() : str.toLowerCase()
  );
}
