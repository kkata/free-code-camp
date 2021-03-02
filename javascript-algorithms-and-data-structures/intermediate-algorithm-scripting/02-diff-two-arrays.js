function diffArray(arr1, arr2) {
  var newArr = [];
  [...arr1, ...arr2].filter(element => {
    if (!arr2.includes(element)|| !arr1.includes(element)) {
      return newArr.push(element)
    }
  })
  // arr1.map((element) => {
  //   if (!arr2.includes(element)) {
  //     newArr.push(element)
  //   }
  // })
  // arr2.map((element) => {
  //   if (!arr1.includes(element)) {
  //     newArr.push(element)
  //   }
  // })
  
  console.log(newArr)
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// diffArray([1, "calf", 3, "piglet"], [7, "filly"])