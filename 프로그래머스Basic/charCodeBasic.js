//문자 개수 세기
//알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, 
//my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수,
//my_string	            result
//"Programmers"	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]

function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}


function solution(str) {
    return [...str].reduce((p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p), Array(52).fill(0));
}


function solution(my_string) {
    let ans = Array(58).fill(0);
    for (let c of my_string) ans[c.charCodeAt()-65]++;
    ans.splice(26,6);
    return ans;
}