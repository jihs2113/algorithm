//배열의 원소 삭제하기

function solution(arr, delete_list) {
  let result = [];
  arr.map((item) => {
    if (!delete_list.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

const solution = (arr, dels) => arr.filter((el) => !dels.includes(el));

function solution(arr, delete_list) {
  const set = new Set(delete_list);
  return arr.filter((v) => !set.has(v));
}
