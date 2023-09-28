//진료 순서정하기



function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}