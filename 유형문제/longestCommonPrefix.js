//공동 접두사 찾기
// 다수 주어진 문자열들이 배열로 input되었을때 모든 inpute들을 체크해서 가장 긴 prefix글자를 찾아서 return하는 함수를 구현
//input : strs = ['flower', 'flow', 'flight']
//output : "fl"
//flower
//flow
//flight
//index 활용해서 글자 하나씩 매칭하면서 위에서 아래로 체크한다.

const longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix = prefix + char;
  }
  return prefix;
};
