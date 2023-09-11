//2차원배열 만들기


function solution(num_list, n) {
    const answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0, n));
    }

    return answer;
}

function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}