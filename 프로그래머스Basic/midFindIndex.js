//왼쪽 오른쪽
//str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
//먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
//"l"이나 "r"이 없다면 빈 리스트를 return

//str_list	                result
//["u", "u", "l", "r"]	  ["u", "u"]
//["l"]	                      []


function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}

//findIndex 활용
function solution(str_list) {
  const i = str_list.findIndex((str) => /l|r/.test(str));
  if (i === -1) {
    return [];
  }
  return str_list[i] === 'l' ? str_list.slice(0, i) : str_list.slice(i + 1);
}

function solution(str_list) {
    const idx = str_list.findIndex(el => el === "l" || el === "r");
    return (str_list[idx] === "l") ? str_list.slice(0, idx) : 
           (str_list[idx] === "r") ? str_list.slice(idx+1) : [];
}