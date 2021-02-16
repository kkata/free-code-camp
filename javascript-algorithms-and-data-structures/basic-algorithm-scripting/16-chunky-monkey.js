function chunkArrayInGroups(arr, size) {
  const ans =[]
  for ( let i = 0; i < arr.length; i+=size ) {
    ans.push(arr.slice(i, size + i))
  }
  console.log(ans)
  return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)