//소인수분해
//소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
//  n	    result
//  12	    [2, 3]
//  17	    [17]
//  420	    [2, 3, 5, 7]

function solution(n) {
    var answer = [];

    for(let i = 2; i <= n; i++) {

        while (n % i === 0) {

            n = n / i;
            answer.push(i);

        }
    }

    return [...new Set(answer)];
}

function solution(n) {
  return Array.from(
    new Set(
      [...Array(n + 1).keys()]
        .filter((v) => n % v === 0)
        .filter((v) => {
          for (let i = 2; i < v; i++) {
            if (v % i === 0) return false;
          }
          return true;
        })
    )
  ).splice(1);
}


function solution(n) {
    let answer = []

    let i = 2;
    while (i <= n) {
      if (n % i === 0) {
        answer.push(i)     
        n = n / i
      } else {
      i++        
      }
    }

    return [...new Set(answer.sort((a, b) => a > b ? 1 : -1))]
}