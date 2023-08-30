//할 일 목록
//배열의 boolean값을 통하여 false인 것들만 반환

function solution(todo_list, finished) {
  let result = [];

  todo_list.filter((v, idx) => {
    if (!finished[idx]) result.push(v);
  });

  return result;
}

function solution(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}
