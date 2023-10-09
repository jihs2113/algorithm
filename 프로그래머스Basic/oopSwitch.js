//리스트 자르기
//정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. 
//slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.
//n	    slicer	        num_list	                result
//3	   [1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	  [2, 3, 4, 5, 6]

function solution(n, slicer, num_list) {
    const [a, b, c] = slicer
    let result
    switch(n) {
        case 1: {
            result = num_list.slice(0, b+1)
            break
        }
        case 2: {
            result = num_list.slice(a, num_list.length)
            break
        }
        case 3: {
            result = num_list.slice(a, b+1)
            break
        }
        case 4: {
            const curStr = num_list.slice(a, b+1)
            result = curStr.filter((_, i) => i%c === 0 )
            break
        }
        default: {
            break
        }
    }
    
    return result
}


const slices = {
  1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
  2: (num_list, [a, b, c]) => num_list.slice(a),
  3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
  4: (num_list, [a, b, c]) => num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

function solution(n, slicer, num_list) {
  return slices[n](num_list, slicer);
}


function solution(n, [a, b, c], num_list) {
    if (n === 1) return num_list.slice(0, b + 1);
    if (n === 2) return num_list.slice(a);
    if (n === 3) return num_list.slice(a, b + 1);
    return num_list.slice(a, b + 1).filter((_, i) => !(i % c));
}