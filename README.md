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
  <li>concat()  | const newArr = arr.concat('a', ['b', ['c']], 'abc'); const allRecords =[].concat(...response); flat과 비슷하지만 배열을 합치면서 이중문 까지만 풀어준다.</li>
  <li>Array.isArray()  | Array.isArray(obj); object를 반환하여 확인한다. but typeof는 객체를 반환 </li>
  <li>Array.from()  | Array.from(arrayLike[, mapFn[, thisArg]]) [배열로 변환하고자 하는 객체 [,map함수[,this로 사용할 값]] Array.from({length: 5나 다른 조건}, (v, i) => i + 1));Array.from([1, 2, 3], x => x + x);</li>
</ul>

<h3>정규식 표현</h3>
<ul>
  <li>'숫자0~9'가 아닌 것을 모두 찾는다. /^[0-9]+$/.test(str)</li>
  <li>'영어알파벳 대문자/소문자'를 모두 찾는다. /[a-zA-Z]/g.test(str)</li>
  <li>'숫자로만 이루어져있는지 검사. /^\d+$/</li>
  <li>'특정 단어로 끝나는지 검사. const fileName = 'index.html'; /html$/</li>
</ul>

<h2함수 예제</h2>
<ul>
  <li>콜백함수:   </li>
    <h6> 1) let arr = [1,2,3,31]; </h6> 
      const nums =(callback) => {
  for(value of arr){
    callback(value)
  }
}

const print =(i) => {
  console.log(i)
}

nums(print)
<h6> 2) let arr = [1,2,3,31]; </h6> 
const indexs = (callback) => {
  for(index in arr){
    callback(index)
  }
}

indexs(function(index){
  console.log(index)
  })


</ul>
