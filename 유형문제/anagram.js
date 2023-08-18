//애너그램

const stringA = "listen";
const stringB = "silent";

//split , sort , join
function isAnagram(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  return strA.split("").sort().join() === strB.split("").sort().join();
}
console.log(isAnagram(stringA, stringB));

//map ={}
function isAnagram(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  for (const char of strA) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    // {i:1,s:1,t:1} 이런 객체 map 형식으로 변환
  }
  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

console.log(isAnagram(stringA, stringB));
