function sortedFrequency(arr, val) {
  function findValStart() {
    let low = 0;
    let high = arr.length - 1;
    let result = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        result = mid;
        high = mid - 1;
      } else if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
        //This will make the 'loop' go through the left side
      }
    }
    return result;
  }

  function findValEnd() {
    let low = 0;
    let high = arr.length - 1;
    let result = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        result = mid;
        low = mid + 1;
      } else if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return result;
  }

  const valStart = findValStart(val);
  const valEnd = findValEnd(val);
  const frequency = valEnd - valStart;
  return frequency;
}

module.exports = sortedFrequency;
