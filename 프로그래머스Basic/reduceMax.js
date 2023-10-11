//문자열 묶기
//가장 개수가 많은 그룹의 갯수 합  return
//strArr	                    result
//["a","bc","d","efg","hi"]	      2


//Map 활용
function solution(strArr) {
    const counter = new Map();
    for (const str of strArr) {
      counter.set(str.length, (counter.get(str.length) || 0) + 1);
    }
    return Math.max(...counter.values());
  }

function solution(strArr) {
    const aa = strArr.map((v)=>v.length)
    const count = {}
    for (let i = 0; i < aa.length; i++){
        count[aa[i]] = count[aa[i]] ? count[[aa[i]]] + 1 : 1;
    }
    return Object.values(count).sort((a,b)=>b-a)[0]
}

function solution(strArr) {
    return Math.max(...strArr.reduce((p, c) => (p[c.length]++, p), Array(31).fill(0)));
}


