//수열과 구간쿼리3
//let a = [0, 1, 2, 3, 4];
//let b = [[0, 3],[1, 2],[1, 4]];
//b의 인덱스요소 0과 3끼리 a의 인덱스 값을 교환하여 return


function solution(arr, queries) {
    let a = arr;
    for(value of queries){
      let temp = 0;
      temp = a[value[0]];
      a[value[0]] = a[value[1]];
      a[value[1]] = temp;
    }
    
    return a;
}

//foreach와 구조분해할당을 활용
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}