//주사위 게임2
//주사위 3개를 굴려서 나온 a,b,c를
//세 숫자가 모두 다르면 a+b+c  똑같으면  (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 
//하나만 다르면 (a + b + c) × (a2 + b2 + c2 )를 return 

function solution(a, b, c) {
    let sum1 = a + b + c;
    let sum2 = a * a + b * b + c * c;
    let sum3 = a ** 3 + b**3 + c**3;

    if (a === b && b === c) 
        return sum1*sum2*sum3;
     else if (a === b || a === c || b === c) 
        return sum1*sum2;
     else 
        return sum1;

}

function solution(a, b, c) {
    let result = a + b + c
    if (a === b || a === c || b === c) {
        result *= a ** 2 + b ** 2 + c ** 2
    }
    if (a === b && a === c) {
        result *= a ** 3 + b ** 3 + c ** 3
    }
    return result
}
