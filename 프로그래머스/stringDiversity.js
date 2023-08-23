//시저암호
//어떤 문장의 알파벳을 일정 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식의 시저암호화하는 함수를 구현
//문자열 s와 일정 거리 n을 활용하여 구현
function caesar(s, n) {
  var result = "";

  var car = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] == " ") result += " ";
    else
      result += String.fromCharCode(
        s.charCodeAt(i) > 90
          ? ((s.charCodeAt(i) + n - 97) % 26) + 97
          : ((s.charCodeAt(i) + n - 65) % 26) + 65
      );
  }

  return result;
}
