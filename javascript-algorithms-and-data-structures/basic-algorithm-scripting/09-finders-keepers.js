function findElement(arr, func) {
  const result = arr.filter(func)
  return result[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);