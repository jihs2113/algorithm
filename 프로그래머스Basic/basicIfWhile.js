//배열 만들기4

//      arr	         result
//[1, 4, 2, 5, 3]	[1, 2, 3]

function solution(arr) {
    var stk = [];

    for(let i=0; i<arr.length; i++) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            continue;
        }

        if(stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            continue;
        }

        stk.pop();
        i--;
    }

    return stk;
}


function solution(arr) {
    var stk = [];
    let i = 0 ; 
    while( i < arr.length){
        if(stk.length ===0) stk.push(arr[i++]);
        else {
            let val = stk[stk.length-1];
            if( val < arr[i] ) stk.push(arr[i++]);
            else stk.pop();
        }

    }
    return stk;
}