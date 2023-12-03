function findRotatedIndex(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
