//배열유사도
//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return
//map과 filter를 이용하여 유사한 단어를 구하고 flat을 활용하여 합침

function solution(s1, s2) {
    let a = s2.map((item) => {
                return s1.filter(v => v===item)
                 });
    return a.flat().length;
}