//순서 바꾸기
//arr =[5, 2, 1, 7, 5];
// n =3
//result = [7, 5, 5, 2, 1];
//arr에서 n의 인덱스 이후만큼을 잘라서 arr 맨 앞에 붙인다

//concat을 활용
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}
