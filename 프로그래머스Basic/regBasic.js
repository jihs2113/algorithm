//세개의 구분자
//let a= "baconlettucetomato";
//a,b,c를 포함된 간격으로 자른 문자열을 배열에 return


function solution(myStr) {
    const list = myStr.split(/[a|b|c]/).filter(str => str);
    return list.length ? list : ["EMPTY"];
}

const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']

