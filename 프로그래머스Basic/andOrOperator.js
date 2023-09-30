//간단한 논리연산
//(x1 ∨ x2) ∧ (x3 ∨ x4)
//  x1	  x2	 x3	     x4	   result
//false	 true	true	true	true

function solution(x1, x2, x3, x4) {
    return (x1||x2) && (x3||x4)
}

const solution = (x1, x2, x3, x4) => {
    return (x1+x2)*(x3+x4) ? true : false;
}

const solution = (x1, x2, x3, x4) => (x1 || x2) && (x3 || x4)
