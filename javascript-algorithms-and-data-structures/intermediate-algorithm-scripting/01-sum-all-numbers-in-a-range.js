function sumAll(arr) {
  const sorted = [...arr].sort((a,b)=> a - b)
  let sum = 0
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    sum += i
  }
  return sum;
}

sumAll([1, 4]);