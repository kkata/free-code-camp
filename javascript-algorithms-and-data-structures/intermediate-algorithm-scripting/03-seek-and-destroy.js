function destroyer(arr) {
  const length = Object.keys(arguments).length;
  let destroyed = arr;

  for (let i = 1; i < length; i++) {
    destroyed = destroyed.filter(element => element !== [...arguments][i])
  }

  console.log(destroyed)
  return destroyed
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
