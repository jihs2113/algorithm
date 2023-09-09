//날짜 비교하기

function solution(date1, date2) {
    return +date1.join('') < +date2.join('') ? 1 : 0;
}