//덧셈식 출력하기
//덧셈하는 식을 출력하는데
//컴파일과 다르게 스크립트인 인터프리터언어 javascript의  본연의 readline을 활용하여 출력하는 함수

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const [a, b] = line.split(' ')
    console.log(a, '+', b, '=', Number(a) + Number(b))
})