// Only change code below this line
function urlSlug(title) {
    const arr = title.toLowerCase().split(/\s|-|,|\./g).filter(element => element !== '')
    return arr.join('-')

}
// Only change code above this line
// urlSlug("Winter Is Coming")
// urlSlug(" Winter Is  Coming")