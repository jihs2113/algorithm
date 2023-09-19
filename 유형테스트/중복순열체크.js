
//중복 순열 체크 ?
//a의 문자열의 숫자값에따라 배열 arr의 index 요소를 추출하여 return  


// let a = "9666775553"; // 'WORLD'
// let a = "2220281"; // 'CAT.'
let a = "44335550555666"; // 'HELLO'


//내 코드 (아직 해결 못함)
let arr = ['','.QZ','ABC',"DEF",'GHI',"JKL",'MNO','PRS','TUV','WXY'];

let result =[];
let temp ='';
let cnt = 0;


for(let i=0;i<a.length;i++){
  if(temp !== a[i]){
    console.log(cnt)
    // console.log(a[i])
    cnt === 0 ? result.push(arr[+a[i]][cnt]) : result.push(arr[+a[i-1]][cnt])
    cnt=0;
  }else cnt++;
  temp = a[i];
}

a[0] === a[1] ? result.shift() : result
result.join('')


// while문 활용? 테스트 케이스 정답 안맞음.
//   let arr = ['','.QZ','ABC',"DEF",'GHI',"JKL",'MNO','PRS','TUV','WXY'];
//   let result = [];
  
//   let i = 0;
//   while (i < a.length) {
//     let currentChar = a[i];
//     let count = 1;

//     // 계속해서 현재 문자와 다음 문자를 비교하여 동일한 문자들을 처리합니다.
//     while (i + count < a.length && a[i + count] === currentChar) {
//       count++;
//     }

//     // arr 배열에서 해당 문자와 숫자에 맞는 문자를 찾아 result에 추가합니다.
//     result.push(arr[+currentChar][count]);

//     // 다음 문자로 이동합니다.
//     i += count;
//   }
//   result
//   result.join('');


// // 테스트 케이스
// console.log(solution("44335550555666")); // "HELLO"
// console.log(solution("9666775553"));     // "WORLD"
// console.log(solution("2220281"));        // "CAT."