//코딩 기초 다지기
//let a = ["and","notad","abcd"];
//ad를 포함한 인덱스를 제거하여 return

function solution(strArr) {
    return strArr.filter(v => !v.includes('ad'));
}