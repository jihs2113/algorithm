//한번만 등장한 문자
//한번만 등장한 문자만 찾아서 return
//let a = "abcabcadc";
//result = "d"



function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}


//Map을 활용
function solution(s) {
    const m = new Map();
    [...s].forEach(e=>m.set(e, m.get(e)+1||1));
    return [...m].filter(e=>e[1]===1).map(e=>e[0]).sort().join("");
}


