//삼각형의 완성조건
//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
//두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.


//가장 긴 변이 6인 경우 될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
//나머지 한 변이 가장 긴 변인 경우 될 수 있는 한 변은 7, 8 로 2개입니다.
//따라서 3 + 2 = 5를 return합니다.
//sides	  result
//[1, 2]	1
//[3, 6]	5
//[11, 7]	13

function solution(sides) {
    return Math.min(...sides)*2-1
}

function solution(sides) {
    let a = Math.min(...sides)
    let b = Math.max(...sides)
    let answer = 0
    for(let i = 1 ; i < a+b ; i++){
        let arr = [a,b,i].sort((a,b) => a-b)
        let [q,w,e] = arr
        if(q+w > e){
            answer++
        }
    }
    return answer;
}


function solution(sides) {

    sides.sort((a,b) => b - a);

    return sides[1] + sides[1] -1;
}