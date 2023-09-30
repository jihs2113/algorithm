//문자열 몇번 등장하는지 카운트
//let a = "banana";
//let b = "ana";
//a 문자열에서 b가 중첩되게 몇번 등장하는지 count값을 return

function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }

    return count;
}

function solution(myString, pat) {
    const reg = new RegExp(`(?=${pat})`, "g")
    return myString.match(reg)?.length || 0;
}

const solution=(s,p)=>Array(s.length-p.length+1).fill('').map((v,i)=>s.slice(i,i+p.length)).filter(v=>v==p).length;
