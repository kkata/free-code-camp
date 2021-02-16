function mutation(arr) {
  const first = [...arr[0]].map(element => element.toLowerCase())
  const second = [...arr[1]].map(element => element.toLowerCase())
  return second.every(element => {
    return first.indexOf(element) !== -1
  })
}

mutation(["hello", "hey"]);