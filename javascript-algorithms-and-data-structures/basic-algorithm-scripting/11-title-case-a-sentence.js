function titleCase(str) {
  const lowerArr = str.split(' ').map(element => element.toLowerCase());
  const titleCaseArr = lowerArr.map(element => element.charAt(0).toUpperCase() + element.slice(1));
  
  return titleCaseArr.join(' ');
}

titleCase("I'm a little tea pot");