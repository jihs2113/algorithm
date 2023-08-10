//이진 탐색

//정렬된 리스트에 사용되는 탐색 알고리즘
//리스트에서 탐색범위를 절반씩 좁혀가며 특정한 값을 찾을때 사용한다.
//속도가 빠르고 효율적이다.(log n)
//타겟 값이 중간값보다 작으면 중간값을 기준으로 좌측 아이템들을 탐색
//타겟 값이 중간값보다 크면 우층 아이템들을 탐색
//같은 방법으로 선택된 중간의 값을 비교하고 해당값을 찾을떄까지 반복.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle]) {
      high = middle - 1;
    } else if (target > arr[middle]) {
      low = middle + 1;
    } else return middle;
  }
  return -1;
}
console.log(binarySearch([10, 20, 30, 40, 55, 70], 55));
console.log(binarySearch([10, 20, 50, 70, 90, 110], 100));
