//핸드폰 번호 가리기
//전화번호 맨 뒤 4자리를 빼고는 전부 *로 가리기

function solution(phone_number) {
  const arr = phone_number.split("");

  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "*";
  }

  return arr.join("");
}
