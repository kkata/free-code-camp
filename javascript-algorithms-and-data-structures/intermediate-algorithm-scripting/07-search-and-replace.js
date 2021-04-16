function myReplace(str, before, after) {
  let replacedStr = after;
  if (/^[A-Z]/.test(before)) {
    replacedStr = after.replace(/^[a-z]/, after.charAt(0).toUpperCase())
  } else if (/^[a-z]/.test(before) && /^[A-Z]/.test(after) ){
    replacedStr = after.replace(/^[A-Z]/, after.charAt(0).toLowerCase())
  }
  const arr = str.split(' ');
  arr[arr.findIndex(item => item === before)] = replacedStr;
  return arr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("I think we should look up there", "up", "Down")