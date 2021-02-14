function findLongestWordLength(str) {
  const spliedtStringArr = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < spliedtStringArr.length; i ++) {
    if (longestWord.length < spliedtStringArr[i].length) {
      longestWord = spliedtStringArr[i]
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");