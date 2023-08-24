//가장 가까운 같은 글자
//문자열 s가 주어졌을때 중복된느 글자가 몇글자 앞에 있엇는지 숫자로 만든 배열을 return하는 함수를 구현
//slice와 map을 활용한 배열변환

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
