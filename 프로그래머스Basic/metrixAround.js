//이차원 배열 대각선 순휘하기
// [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]
// k =2
//[i][j]의 값이 k보다 작거나 같은것들의 합을 return

function solution(board, k) {
    let sum= 0
    for(let i = 0 ; i < board.length ; i ++) {
        for(let j = 0 ; j < board[i].length ; j ++) {
            if(i+j <= k) sum+= board[i][j]
        }
    }
    
    return sum
}


function solution(board, k) {
    return board.map((x, i) => x.filter((_, j) => i + j <= k)).flat(1).reduce((p, c) => p + c);
}


function solution(board, k) {
  return board.reduce(
    (total, row, i) => total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0,
  );
}