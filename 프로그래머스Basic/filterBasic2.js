//배열만들기5
//let intStrs = ["0123456789","9876543210","9999999999999"];
//let k=50000;
//let s=5;
//let l=5;


//배열의 각 요소를 number로 만들때 처음부터 number로 바꿔준 후 로직을 짜준다
function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}