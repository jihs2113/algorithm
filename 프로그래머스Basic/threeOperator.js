//가위 바위 보
//삼항 연산자를 활용하여 구하기
// 가위 2 바위 0 보 5
//위에 맞게 이길수 있는 숫라를 return

function solution(rsp) {
  let result = "";
  rsp.split("").map((item) => {
    result += item === "2" ? "0" : item === "0" ? "5" : "2";
  });
  return result;
}

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
