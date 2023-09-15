//수열과 구간쿼리1

//arr [0, 1, 2, 3, 4]	
//queries  [[0, 1],[1, 2],[2, 3]]	
//result [1, 3, 4, 4, 4]
//쿼리의 각 요소의 index의 값에 맞게 +1을 해서 arr를 return



function solution(arr, queries) {
    queries.forEach(i=>{
        while(i[0]<=i[1]) arr[i[0]++]++;
    })
    return arr;
}


function solution(arr, queries) {
    for (let [s,e] of queries) for (let i=s; i<= e; i++) arr[i]++
    return arr
}


function solution(arr, queries) {
    const N = arr.length;

    for (const [ start, end ] of queries) {
        for (let i = start; i <= end; i += 1) {
            arr[i] += 1;
        }
    }

    return arr;
}