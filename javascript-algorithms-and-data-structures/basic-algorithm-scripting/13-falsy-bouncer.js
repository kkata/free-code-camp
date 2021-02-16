function bouncer(arr) {
  const trueArr = arr.filter(element => {
    return!!element && element
  })
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);