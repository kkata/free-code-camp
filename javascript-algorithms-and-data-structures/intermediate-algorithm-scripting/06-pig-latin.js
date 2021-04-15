function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/;
  const consonantRegex = /^[^aeiou]+/;

  if (vowelRegex.test(str)) {
    return str + 'way'
  } else {
    return str.replace(consonantRegex, '') + consonantRegex.exec(str)[0] + 'ay'
  }
}

translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("algorithm")