//카드뭉치
//문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수
//

function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

function solution(cards1, cards2, goal) {
  // cards1과 cards2에 이용할 카드를 사용할 순서
  let idx1 = 0;
  let idx2 = 0;

  // goal의 길이는 cards1의 길이 + cards2의 길이이므로
  // goal을 for문으로 돌려 모든 단어를 확인해본다.
  for (let word of goal) {
    // * 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
    // 현재 들어온 단어가 cards1에 idx1 순서에 있다면
    // idx1을 1 증가시키고 넘어간다.
    if (cards1[idx1] === word) idx1++;
    // cards1 현재 순서에 단어가 같지 않다면
    // cards2 현재 순서의 단어와 같은지 확인한다.
    // 현재 순서에 있다면 idx2를 1 증가시키고 넘어간다.
    else if (cards2[idx2] === word) idx2++;
    // cards1과 cards2의 순서에 단어가 다 다르다면
    // 문장을 만들수 없으므로 No를 반환해준다.
    else return "No";
  }

  // for문을 통과했으면 문장을 만든 것이므로 Yes를 반환해준다.
  return "Yes";
}
