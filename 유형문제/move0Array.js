//배열 0 옮기기
//input  nums = [0,1,0,3,12];
//output [1,3,12,0,0];
// 2포인터 활용 => 선형으로 순회하면서 검사

let nums = [0, 1, 0, 3, 12];

var move = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //temp
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
