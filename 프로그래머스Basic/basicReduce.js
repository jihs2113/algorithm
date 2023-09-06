//9로 나눈 나머지
//"123"  6
//"78720646226947352489" 2
//각 자리를 나눈 값들을 더해서 9로 나눈 나머지를 return


function solution(number) {
    return [...number].reduce((acc, cur) => acc+Number(cur), 0)%9
}


function solution(number) {
    var answer = 0;

    for(let i of number){
        //각 자리수를 나눈 값
        answer += Number(i);
    }

    return answer%9;
}

