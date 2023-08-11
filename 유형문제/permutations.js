//순열
//주어진 n 엘리멘트들의 모든 경우의 수를 계산하는 방법 / O(n!) 시간복잡도
//백트래킹 / DFS를 활용하여 문제 접근
//input=[1,2]
//output=[[1,2],[2,1]]

//input=["a","b","c"]
//output["a","b","c"]
//      ["a","c","b"]
//      ["b","a","c"]
//      ["b","c","a"]
//      ["c","b","a"]
//      ["c","a","b"]
//[a,b,c]
// i
// j->  ] i와 j를 스왑해주면서 옮겨간다. [a,b,c] [b,a,c] [c,b,a]
//한바퀴 돌려주면 맨앞에 있는 문자는 픽스되고 뒤에 2개 끼리만 다시 스왑해주면된다.
//백트래킹 패턴
//반복 - 주어진 인풋 엘리멘트들에 반복문 돌리기
//선택 - 탐색타겟을 설정 / 선택을 통해 엘리멘트 순서 교체
//탐색 - DFS를 활용해 탐색 실행
//선택취소 - 선택 과정 다시 복구하기(undo)

function parmutate(arr) {
  const result = [];

  //DFS
  const dfs = (i, arr) => {
    if (i === arr.length) {
      return result.push([...arr]);
    }
    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //back tracking
    }
  };
  dfs(0, arr);
  return result;
}

console.log(parmutate(["a", "b", "c"]));
//dfs 콜스택이 어떻게 실행되고 어떤 순서대로 input들이 재배열되는지가 중요하다
