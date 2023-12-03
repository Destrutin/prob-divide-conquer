function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;
  // Make it a binary search to get O(log n)

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // Get this middle index
    if (arr[mid] === 1) {
      low = mid + 1;
      // If the middle is 1, go to the right half
    } else {
      if (mid === 0 || (mid > 0 && arr[mid - 1] === 0)) {
        // If the middle is 0, move to the left. If the index to the left is also 0, move more to the left
        return arr.length - mid;
        // Return the amount of zeroes to the right of the middle
      } else high = mid - 1;
      // Otherwise keep searching in the left
    }
  }
  return 0;
}

module.exports = countZeroes;
