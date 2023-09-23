//0~9까지 정수를 가진 배열 numbers가 매개변수로 주어질때, 자연수에 부호 +,-를 붙여 전체 합이 0이 되는 경우의수를 return
//numbers의 원소개수는 100개의 이하의 자연수
//배열 안에 있는 정수는 0 이상 9이하입니다
//정답이 커질수 있으니 마지막 5자리만 return 
//[1,1,1,1] => result = 6
//[8,3,5,7,3,4] => result =6

let arr = [1,1,1,1,1,1,1];

arr.sort((a,b) => a-b);


let d = arr.reduce((a,c,i) => {
    return a+c/2
},0)
const sum = (a,b) => {
    let cnt =1;

    for(let i=a; i>(arr.length-b);i--){
        cnt *=i;
      }
    return cnt;
}

function solution(arr) {
    let answer =[];
    let result =0;


    let counts = arr.reduce((a,c,i) => {
        if(a>=d){
         answer.push([a,c,i]);
          return a+c;
       } return a+c;
     },0)

     if(arr.join('').replaceAll(arr[0],'').length === 0){
        answer.unshift([0, 0,arr.length/2]);
        sum(arr.length,answer[0][2])
     }else sum(answer[0][2],answer[0][2])

     result =  cnt/(arr.length-answer[0][2]);
     return result;
}

solution(arr);

//아직 해결 못함.

