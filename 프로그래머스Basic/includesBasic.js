//글자 지우기
//let a = "apporoograpemmemprs";
//let n = [1, 16, 6, 15, 0, 10, 11, 3];
//a에서 n 요소 인덱스에 대한 값을 뺸 결과를 return


//filter와 includes를 활용
const solution=(s,d)=>[...s].filter((v,i)=>!d.includes(i)).join('')



function solution(m, a) {
    var answer = '';

    for(let i = 0; i<m.length; i++){
        if(!a.includes(i)){
            answer += m[i]
        }
    }

    return answer;
}