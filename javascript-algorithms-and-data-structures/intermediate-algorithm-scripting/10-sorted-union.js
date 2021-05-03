function uniteUnique(...arr) {
  console.log(arr)
  const reducer = (accumulator, currentValue) => {
    // console.log('accumulator',accumulator)
    // console.log('currentValue',currentValue)
    return accumulator.concat(currentValue)
  }

  const one = arr.reduce(reducer, [])
  const unique = one.filter((element,index) => {
    return one.indexOf(element) === index
  })
  console.log(unique)
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);