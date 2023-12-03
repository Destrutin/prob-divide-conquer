function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      return low;
    } else if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

module.exports = findRotationCount;
