//수열과 구간쿼리 4

//let a = [0, 1, 2, 4, 3];
//let b = [[0, 4, 1],[0, 3, 2],[0, 3, 3]];
//=> [0,4,1]이면 a의 index 0~4까지 1의 배수의 index 요소값을 +1해서 return
//result = [3, 2, 4, 6, 4];



function solution(arr, queries) {
    let a = [...arr];
    for(let i=0;i<queries.length;i++){
      for(let k=queries[i][0];k<=queries[i][1];k++){
        if(k%queries[i][2] === 0 || k === 0){
              a[k]++;
        }
      }
    }
    return a;
}

//구조분해할당을 활용하여 클린 코드
function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}

function solution(arr, queries) {
    return queries.reduce((bucket, [s, e, k]) => {
        for (let i = s; i <= e; i += 1) {
            if (i % k === 0) bucket[i] += 1
        }
        return bucket
    }, [...arr])
}

function solution(arr, queries) {
    for (const query of queries){
        const [s, e, k] = [query[0], query[1], query[2]]
        for (let i=s; i<=e; i++){
            if (i % k === 0) arr[i]++
        }
    }
    return arr
}