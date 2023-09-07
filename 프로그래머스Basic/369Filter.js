//369 게임
//369게임에서 주어지는 숫자 n에 따라 박수쳐야되는 횟수를 return


function solution(order) {
    return [...String(order)].filter((v) => ["3","6","9"].includes(v)).length
}

function solution(order) {
    return (''+order).split(/[369]/).length-1;
}