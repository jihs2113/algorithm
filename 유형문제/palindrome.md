//추가 문자열 활용

function q(a){
let rev = "";
for(let i = a.length -1;i>=0;i--){
rev +=a[i];
}
return rev === a;
}

console.log(q("abba")); // true
console.log(q("david")); // false

// two pointer 활용
function check(str){
const len = str.length;
const middle = Math.floor(len / 2);
for(let i=0;i<middle; i++){
if(str.charAt(i) !== str.charAt(len -1 -i)){
return false;
}
}
return true;
}
console.log(check("abba")); // true
console.log(check("david")); //false
console.log(check("eye")); //true
