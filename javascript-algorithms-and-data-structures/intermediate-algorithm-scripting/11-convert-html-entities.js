function convertHTML(str) {
  function replacer(match) {
    switch(match){
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&apos;'
      default:
        break
    }
  }
  return str.replace(/([&<>\"'])/g, replacer)

  // return str.replace(/&/g, '&amp;')
  //   .replace(/</g, '&lt;')
  //   .replace(/>/g, '&gt;')
  //   .replace(/"/g, '&quot;')
  //   .replace(/'/g, '&apos;')
}

convertHTML("Dolce & Gabbana");