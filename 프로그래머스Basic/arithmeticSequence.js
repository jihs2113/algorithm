//등차수열의 특정한 항만 더하기

//a = 3, d = 4 , includes[true, false, true,true] ==> 3 ,7 ,11 , 15로 true에 대한 값만 더해서 return


function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}



function solution(a, d, included) {
    var answer = 0;
    included.map((x,i) => {
        if(x) answer += (a+d*(i));
    })
    return answer;
}