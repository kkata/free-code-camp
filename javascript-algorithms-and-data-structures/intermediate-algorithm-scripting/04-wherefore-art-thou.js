function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  const keys = Object.keys(source)
  // console.log(keys)

  arr = collection.filter(item => {
    return keys.every(key => {
      return item.hasOwnProperty(key) && item[key] === source[key]
    })
    
  })
  // console.log(arr)

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })