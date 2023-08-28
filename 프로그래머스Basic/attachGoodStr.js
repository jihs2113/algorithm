//글자 이어 문자열 만들기
// let my_string = "zpiaz";
// let index_list = [1, 2, 0, 0, 3];
// indexlist 값의 인덱스로 가진 순서로 정렬

function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
