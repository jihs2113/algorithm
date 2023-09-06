//피자 나눠먹기2

//6조각이 한판인 피자를
//n명이서 똑같이 나눠먹을수있는 최소값을 구해라


function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}


const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}