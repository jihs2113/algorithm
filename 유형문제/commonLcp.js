//가장 긴 공통 접두사
//
//let strs = ['flower','flow','flight'];

var longestCommonPrefix = function (strs) {
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
    prefix += char;
  }
  return prefix;
};
//"fl"
