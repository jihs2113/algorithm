//컨트롤 제트
//Z앞에 오는 값들만 빼고 전부 더한 값을 return
//s	                result
//"1 2 Z 3"	          4
//"10 20 30 40"	     100
//"10 Z 20 Z 1"	      1



function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
function solution(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
    return arr.reduce((a,v)=>a+ +v,0);
}

function solution(s) {

    let arr = s.split(" ");

    while ( arr.indexOf('Z') > -1) {

        arr.splice( arr.indexOf('Z')-1, 2);
    }

    return arr.reduce((a,b) => parseInt(a) + parseInt(b),0)
}

//map(Number)를 활용하여 문자열을 숫자로 변환과 동시에 reduce로 전체 합을 구한다
var solution=s=>s.split(' ').reduce((t,c)=>c=='Z'?t.slice(0,-1):[...t,c],[]).map(Number).reduce((a,b)=>a+b,0)
