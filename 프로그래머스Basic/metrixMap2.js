//특별한 이차원 배열1
//n = 3	arr = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
//n에 따라서 n X n 배열 arr를 만들어 return


function solution(n) {
    let result =[];
    
    for(let i=0;i<n;i++){
      let arr = [...new Array(n).fill(0)];
      arr[i]=1;
      result.push(arr)
    }
        return result;
    }

function solution(n) {
  const answer = new Array(n).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }
  return answer;
}