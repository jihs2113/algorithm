//qr code

//let code = "qjnwezgrpirldywt";
//let q = 3;
//let r = 1;

function solution(q, r, code) {
    return [...code].filter((_, i) => i % q === r).join('');
  }