# algorithm

<h3>자주 쓰이는 문법 array 와 object</h3>
<ul>
  <li>indexOf | findIndex()</li>
  <li>sort() | sort((a,b) => a-b)</li>
  <li>some() | includes()</li>
  <li>set() | const newArr = [...new Set(arr)]</li>
  <li>reduce() , concat() | const reduceNewArray = exampleArray.reduce((acc, x) => acc.concat(x), []);</li>
  <li>flatMap()  | arr1.flatMap(x => [x * 2]);</li>
  <li>flat()  | const newArray = exampleArray.flat();  const newArray = exampleArray.flat(2); ex)[2,[1,[]]]</li>
  <li>apply()  | const maxValue = Math.max.apply(null, arr);   Math.max(...arr);</li>
</ul>

<h3>정규식 표현</h3>
<ul>
  <li>'숫자0~9'가 아닌 것을 모두 찾는다. /^[0-9]+$/.test(str)</li>
  <li>'영어알파벳 대문자/소문자'를 모두 찾는다. /[a-zA-Z]/g.test(str)</li>
  <li>'숫자로만 이루어져있는지 검사. /^\d+$/</li>
  <li>'특정 단어로 끝나는지 검사. const fileName = 'index.html'; /html$/</li>
</ul>
