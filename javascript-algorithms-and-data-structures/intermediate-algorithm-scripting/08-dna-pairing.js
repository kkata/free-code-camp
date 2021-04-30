function pairElement(str) {
  const arr = [...str].map(element => {
    let pair;
    switch (element) {
      case 'A':
        pair = 'T'
        break
      case 'T':
        pair = 'A'
        break
      case 'C':
        pair = 'G'
        break
      case 'G':
        pair = 'C'
        break
    }
    return [element, pair]
  })
  // console.log(arr)
  return arr;
}

pairElement("ATCGA")
pairElement("GCG");