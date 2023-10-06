//2의 영역



function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}


function solution(arr) {

    let indexArray = [];
    if(arr.filter(x=>x===2).length === 0) return [-1]
    arr.forEach((x,i)=>{
      if(x===2){
        indexArray.push(i)
      }
    })
  
    return indexArray[1]?arr.slice(indexArray[0],indexArray[indexArray.length-1]+1):arr.slice(indexArray[0],indexArray[0]+1)
  }


function solution(arr) {
    let p1 = arr.indexOf(2);
    let p2 = arr.lastIndexOf(2);

    return !arr.includes(2) ? [-1] : p2 == -1 ? [2] : arr.slice(p1, p2+1);
}