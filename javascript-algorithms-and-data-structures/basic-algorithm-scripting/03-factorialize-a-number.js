function factorialize(num) {
  const arr = [ ...Array(num).keys(), num ].slice(1);
  let factorializedNum = 1 ;
  
  arr.forEach(element => {
    factorializedNum = factorializedNum * element;
  });
  
  return factorializedNum;
}

factorialize(0);