//배열 길이 2의 거듭제곱으로 만들기
//let a = [1, 2, 3, 4, 5, 6]; = 6
//[2,4,8,16...];
//result = [1,2,3,4,5,6,0,0] = 8
//배열이 주어질떄 배열의 길이가 2의 거듭제곱의 가까운 수 만큼 0을 추가하여 return


//while문 활용
function solution(arr) {
    const len = arr.length;
    let i = 0;

    while (true) {
        const num = 2 ** i;

        if (len > num) {
            i++;
        } else {
            for (let i = 0; i < num - len; i++) {
                arr.push(0);
            }

            return arr;
        }
    }
}

//Math.log2를 활용하여 계산
function solution(arr) {
    const length = arr.length;
    const totalLength = 2 ** Math.ceil(Math.log2(length));
    return [...arr, ...new Array(totalLength - length).fill(0)];
  }

  function solution(arr) {
    return [...arr, ...Array(2 ** Math.ceil(Math.log2(arr.length)) - arr.length).fill(0)];
}