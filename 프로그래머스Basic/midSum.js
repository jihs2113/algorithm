//두 수의합

//BigInt 활용
const solution = (a, b) => String(BigInt(a) + BigInt(b))

function solution(a, b) {
    let result = '';

    result = (BigInt(a) + BigInt(b)).toString();

    return result;
}

function solution(a, b) {
    const numA = BigInt(a);
    const numB = BigInt(b);
    return String(numA + numB);
}