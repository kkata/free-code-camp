function sumPrimes(num) {
  let sum = 0;
  function isprimeNumber(n) {
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i=2; i<=num; i++) {
    let prime = isprimeNumber(i) && i;
    sum += prime
  }
  console.log(sum)
  return sum;
}

sumPrimes(10);