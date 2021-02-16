function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num)
}

getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35)
// getIndexToIns([10, 20, 30, 40, 50], 30)
// getIndexToIns([3, 10, 5], 3)
// getIndexToIns([], 1)
// getIndexToIns([2, 5, 10], 15)