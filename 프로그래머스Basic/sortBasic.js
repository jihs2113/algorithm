//A로 B만들기


function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}